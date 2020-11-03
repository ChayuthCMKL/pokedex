import React from 'react'
import useSWR from 'swr'
import fetcher from '../libs/fetcher'
import {ListItem} from '../components/List'
import CircleImage from '../components/CircleImage'

const PokeListItem = ({name, url, handleOnclick}) => {
    const {data} = useSWR(url, fetcher)
    if (data) {
      const {id, sprites: {front_default}, types} = data
      return (
        <ListItem onClick={() => handleOnclick(data)}>
          <CircleImage src={front_default}/>
          <div style={{marginLeft: '4px'}}>
            <span>{name}</span>
            <p>type: {types.reduce((prev, {type}, index) => prev += type.name + ' ' ,'')}</p>
          </div>
        </ListItem>
      )
    } else {
      return (
        <ListItem>
          <span>{name}</span>
          <span>loading....</span>
        </ListItem>
      )
    }
  }

  export default PokeListItem

  