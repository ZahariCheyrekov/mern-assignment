import { React } from 'react'
import './App.css'

import Header from './components/Header'
import Pokemon from './features/search/Pokemon'
import PokemonTypes from './features/pokemonTypes/PokemonTypes'

function App () {
  return (
    <>
      <Header />
      <Pokemon />
      <PokemonTypes />
    </>
  )
}

export default App
