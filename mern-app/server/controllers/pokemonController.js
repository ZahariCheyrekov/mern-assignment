import Pokemon from '../models/Pokemon.js'
import { getPokemonByTypes, getTypes, requestPokemonByName } from '../api/requester.js'

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

export const getPokemonTypes = async (req, res) => {
  const types = await getTypes()

  return res.status(200).json(types.results)
}

export const getPokemonsByGivenType = async (req, res) => {
  const { pokemonType } = req.params

  const pokemonsByType = await getPokemonByTypes(pokemonType)

  const pokemons = []
  for (const { pokemon } of pokemonsByType) {
    const pokemonByType = await requestPokemonByName(pokemon.name)

    const pokemonData = {
      pokemon_image: pokemonByType.sprites.front_default,
      pokemon_name: pokemon.name,
      pokemon_stats: pokemonByType.stats.slice(0, 3)
    }

    pokemons.push(pokemonData)
  }

  return res.status(200).json(pokemons)
}
