import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import pokemonRouter from './routes/pokemonRoutes.js'

import { configDatabase } from './config/configDatabase.js'
import { DEFAULT_PORT } from './constants/appConstants.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', pokemonRouter)

app.get('/', (req, res) => {
  res.send('Application is running correctly.')
})

const PORT = process.env.PORT || DEFAULT_PORT

configDatabase(app, PORT)
