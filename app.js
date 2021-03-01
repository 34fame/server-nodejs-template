import express from 'express'
import graphqlServer from './graphql'

const app = express()

import indexRoute from './routes/index'
app.use('/', indexRoute)

graphqlServer.applyMiddleware({
   app,
})

export default app
