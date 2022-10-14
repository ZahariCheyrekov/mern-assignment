import { React, useState } from 'react'

import SearchPokemon from './SearchPokemon'

import './Pokemon.css'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState()

  return (
        <section className="pokemon__section">
            <SearchPokemon setPokemon={setPokemon} />

            {pokemon &&
                (
                    <article className="pokemon__article">
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
                )
            }
        </section>
  )
}

export default Pokemon
