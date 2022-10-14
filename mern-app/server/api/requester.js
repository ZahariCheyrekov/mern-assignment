import fetch from 'node-fetch'

import { POKEMON_API_URL } from '../constants/appConstants.js'

export const requestPokemonByName = async (pokemonName) => {
  try {
    const result = await fetch(`${POKEMON_API_URL}/${pokemonName}`)

    if (!result.ok) {
      throw new Error(result.statusText)
    }

    const data = await result.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
