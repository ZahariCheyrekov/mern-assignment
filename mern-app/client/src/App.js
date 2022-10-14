import { React } from 'react'
import './App.css'

import Header from './components/Header'
import SearchPokemon from './features/search/components/SearchPokemon'

function App () {
  return (
    <>
      <Header />
      <SearchPokemon />
    </>
  )
}

export default App
