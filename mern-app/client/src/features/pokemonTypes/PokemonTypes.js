import { React, useEffect, useState } from 'react'

import { getPokemonsByType, getPokemonTypes } from '../../api/requester'

import './PokemonTypes.css'

const PokemonTypes = () => {
  const [pokemons, setPokemons] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    const fetchTypes = async () => {
      const types = await getPokemonTypes()
      setTypes(types)
    }
    fetchTypes()
  }, [])

  const getPokemons = async (type) => {
    const pokemons = await getPokemonsByType(type)
    setPokemons(pokemons)
  }

  console.log(pokemons)

  return (
        <>
            {types.length > 0 &&
                <section className="pokemon__types">
                    <h2 className="pokemon__types--title">Pokemon Types</h2>
                    <ul className="pokemon__types--list">
                        {types.map((type, index) =>
                            <li
                                key={index}
                                className="pokemon__types--item"
                            >
                                <span
                                    className="pokemon__type--name"
                                    onClick={() => getPokemons(type.name)}>
                                    {type.name}
                                </span>
                            </li>
                        )}
                    </ul>
                </section>
            }
            {pokemons.length > 0 &&
                pokemons.map((pokemon, index) =>
                    <article
                        key={index}
                        className="pokemon__article"
                    >
                        <img
                            className="pokemon__article--img"
                            src={pokemon.pokemon_image}
                            alt={pokemon.pokemon_name}
                        />
                        <summary className="pokemon__summary">
                            <h3 className="pokemon__name">
                                {pokemon.pokemon_name}
                            </h3>
                            <h4 className="pokemon__stat">
                                HP: {pokemon.pokemon_stats[0].base_stat}
                            </h4>
                            <h4 className="pokemon__stat">
                                Attack: {pokemon.pokemon_stats[1].base_stat}
                            </h4>
                            <h4 className="pokemon__stat">
                                Defense: {pokemon.pokemon_stats[2].base_stat}
                            </h4>
                        </summary>
                    </article>
                )}
        </>
  )
}

export default PokemonTypes
