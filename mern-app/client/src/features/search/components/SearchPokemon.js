import { React, useState } from 'react'
import { getPokemonByName } from '../../../api/requester'

import './SearchPokemon.css'

const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState('')

  const handlePokemonName = (ev) => {
    setPokemonName(ev.target.value.trim().toLowerCase())
  }

  const handleSearchPokemon = async (ev) => {
    ev.preventDefault()
    const pokemon = await getPokemonByName(pokemonName)
    console.log(pokemon)
  }

  return (
    <section className="search__pokemon--section">
      <form className="pokemon__form search__pokemon--form">
        <input
          className="pokemon__form--input"
          placeholder="Pokemon Name"
          value={pokemonName}
          onChange={handlePokemonName}
        />
        <button
          className="pokemon__form--button"
          onClick={handleSearchPokemon}
        >
          Get
        </button>
      </form>
    </section>
  )
}

export default SearchPokemon
