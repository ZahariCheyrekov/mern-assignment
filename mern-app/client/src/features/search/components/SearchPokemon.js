import { React, useState } from 'react'

import './SearchPokemon.css'

const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState('')

  
  return (
    <section className="search__pokemon--section">
      <form className="pokemon__form search__pokemon--form">
        <input className="pokemon__form--input" placeholder="Pokemon Name" onChange={handlePokemonName}/>
        <button className="pokemon__form--button">
          Get
        </button>
      </form>
    </section>
  )
}

export default SearchPokemon
