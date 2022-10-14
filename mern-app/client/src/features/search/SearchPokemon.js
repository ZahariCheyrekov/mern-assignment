/* eslint-disable react/prop-types */
import { React, useState } from 'react'

import { getPokemonByName } from '../../api/requester'

import './SearchPokemon.css'

const SearchPokemon = ({ setPokemon }) => {
  const [pokemonName, setPokemonName] = useState('')

  const handlePokemonName = (ev) => {
    setPokemonName(ev.target.value.trim().toLowerCase())
  }

  const handleSearchPokemon = async (ev) => {
    ev.preventDefault()

    const pokemon = await getPokemonByName(pokemonName)
    setPokemon(pokemon)
  }

  return (
    <form className="pokemon__form search__pokemon--form">
      <input
        className="pokemon__form--input"
        placeholder="Pokemon Name"
        value={pokemonName}
        onChange={handlePokemonName}
      />
      <button
        className={pokemonName === '' ? 'pokemon__form--button disabled' : 'pokemon__form--button'}
        disabled={pokemonName === ''}
        onClick={handleSearchPokemon}
      >
        Get
      </button>
    </form>
  )
}

export default SearchPokemon
