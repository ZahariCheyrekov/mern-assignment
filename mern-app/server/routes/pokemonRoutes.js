import express from 'express'

import { getPokemonByGivenName, getPokemonTypes, getPokemonsByGivenType } from '../controllers/pokemonController.js'

const router = express.Router()

router.get('/pokemon/:name', getPokemonByGivenName)
router.get('/type', getPokemonTypes)
router.get('/type/:pokemonType', getPokemonsByGivenType)

export default router
