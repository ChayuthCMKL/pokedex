import React from 'react'
import useSWR from 'swr'
import fetcher from '../libs/fetcher'
import styled from 'styled-components'
import CircleImage from '../components/CircleImage'

const Layout = styled.div`
    padding: 6px;
    border: 3px dashed gray;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    margin-top: 6px;
    margin-bottom: 2px;
    padding-left: 4px;
`

const DataRow = styled.div`
    padding: 8px;
    border: 1px solid gray;
    border-radius: 4px;
`

const PokemonDetail = ({pokeData}) => {
    const {
        id,
        name,
        sprites: {front_default},
        stats,
        types
    } = pokeData
    return (
        <Layout>
            <CircleImage 
            src={front_default} 
            style={{width: '120px', marginLeft: 'auto', marginRight: 'auto'}}/>
            <Label>ID</Label>
            <DataRow>{id}</DataRow>
            <Label>Name</Label>
            <DataRow>{name}</DataRow>
            <Label>Type</Label>
            <DataRow>{types.reduce((prev, {type}, index) => prev += type.name + ' ' ,'')}</DataRow>
        </Layout>
    )
}

export default PokemonDetail