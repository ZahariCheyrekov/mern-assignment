import fetch from 'node-fetch'

import { POKEMON_API_URL } from '../constants/appConstants.js'
import { getRandomNumbers } from '../utils/getRandomNumbers.js'

export const requestPokemonByName = async (pokemonName) => {
  try {
    const result = await fetch(`${POKEMON_API_URL}/pokemon/${pokemonName}`)

    if (!result.ok) {
      throw new Error(result.statusText)
    }

    const data = await result.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getTypes = async () => {
  try {
    const result = await fetch(`${POKEMON_API_URL}/type`)

    if (!result.ok) {
      throw new Error(result.statusText)
    }

    const data = await result.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonByTypes = async (type) => {
  try {
    const result = await fetch(`${POKEMON_API_URL}/type/${type}`)

    if (!result.ok) {
      throw new Error(result.statusText)
    }

    const data = await result.json()

    const numbers = getRandomNumbers(data.pokemon.length)

    const pokemons = [data.pokemon[numbers[0]], data.pokemon[numbers[1]], data.pokemon[numbers[2]]]
    return pokemons
  } catch (error) {
    console.log(error)
  }
}
