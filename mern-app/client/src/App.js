import { React } from 'react'
import './App.css'

import Header from './components/Header'
import Pokemon from './features/search/Pokemon'

function App () {
  return (
    <>
      <Header />
      <Pokemon/>
    </>
  )
}

export default App
