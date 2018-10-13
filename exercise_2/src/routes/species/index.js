const {Router} = require('express')
const controller = require('./controller')

const router = new Router()

const routes = [{
  method: 'get',
  path: '/:id',
  middleware: [],
  action: controller.getSpecies,
}].forEach(({
  method,
  path,
  middleware,
  action,
}) => router[method](path, middleware, action))

module.exports = router
