require('dotenv').config()

const express = require('express')
const routes = require('./routes')

const app = express()

routes(app)

app.listen(process.env.PORT, err => {
  if (err) throw err
  console.log(`
    Listening at PORT: ${process.env.PORT}

    @org: Globant.
    @address: Santiago, Chile.
    @enviroment: ${process.env.NODE_ENV}

    @routes:
      - /v1/species/:id
  `)
})
