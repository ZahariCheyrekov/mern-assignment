import Pokemon from '../models/Pokemon.js'
import { requestPokemonByName } from '../api/requester.js'

export const getPokemonByGivenName = async (req, res) => {
  const pokemonName = req.url.split('/pokemon/').join('')

  try {
    const pokemon = new Pokemon({ pokemonName })

    await pokemon.save()
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }

  const pokemonByName = await requestPokemonByName(pokemonName)

  const pokemonData = {
    pokemon_image: pokemonByName.sprites.front_default,
    pokemon_name: pokemonName,
    pokemon_stats: pokemonByName.stats.slice(0, 3)
  }

  return res.status(200).json(pokemonData)
}
