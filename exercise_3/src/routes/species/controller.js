const request = require('../../utils/request')

const getSpecies = (req, res) => {
  const {id} = req.params
  request({ method: 'GET', url: `${process.env.API_SPECIES}/api/species/${id}` })
    .then(data => res.status(200).send({data}))
    .catch(error => res.status(404).send({ code: 'SPECIES_NOT_FOUND', error }))
}

module.exports = {
  getSpecies
}
