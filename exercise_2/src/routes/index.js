const species = require('./species')

module.exports = app => {
  app.use('/v1/species', species)
}
