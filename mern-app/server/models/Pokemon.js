import mongoose from 'mongoose'

const pokemonSchema = mongoose.Schema({
  pokemonName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)
export default Pokemon
