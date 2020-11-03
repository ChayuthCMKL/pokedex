import React, { useState } from 'react'
import useSWR from 'swr'
import styled from 'styled-components'
import MainLayout from '../components/MainLayout'
import fetcher from '../libs/fetcher'
import PokeListItem from '../modules/PokeListItem'
import PokemonDetail from '../modules/PokemonDetail'

const POKE_LIST_URI = 'https://pokeapi.co/api/v2/pokemon/'

const Container = styled.div`
  height: calc(100vh - 61px);
  overflow-x: auto;
  box-sizing: border-box;
  padding: 8px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 4px;
`

const IndexPage = ({pokeList}) => {
  const {data: {
    count, 
    next, 
    previous, 
    results: pokemonList
  }} = useSWR(POKE_LIST_URI, fetcher, {initialData: pokeList})
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const handlePokemonSelect = (pokeData) => {
    setSelectedPokemon(pokeData)
  }
  return (
    <MainLayout>
      <Container>
          {
            pokemonList.length > 0
            ? pokemonList.map((value, index) => {
              return (
                <PokeListItem 
                  key={index+value.name} 
                  handleOnclick={handlePokemonSelect}
                  {...value}/>
              )
            })
            : ''
          }
      </Container>
      {
        selectedPokemon
        ? <PokemonDetail pokeData={selectedPokemon} />
        : 'Please Select pokemon'
      }
    </MainLayout>
  )
}

export async function getStaticProps() {
  const pokeList = await fetcher(POKE_LIST_URI)
  return ({props: {pokeList}})
}

export default IndexPage