import { DEFAULT_URL } from '../constants/urls'

export const getPokemonByName = async (pokemonName) => {
  try {
    const result = await fetch(`${DEFAULT_URL}/pokemon/${pokemonName}`)

    if (!result.ok) {
      throw new Error(result.statusText)
    }

    const data = await result.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
