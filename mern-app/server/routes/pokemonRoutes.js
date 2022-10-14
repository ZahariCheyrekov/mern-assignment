import express from 'express'

import { getPokemonByGivenName } from '../controllers/pokemonController.js'

const router = express.Router()

router.get('/pokemon/:name', getPokemonByGivenName)

export default router
