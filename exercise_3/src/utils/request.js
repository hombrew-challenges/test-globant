const req = require('request')

const request = (options) => new Promise((resolve, reject) => {
  req(options, (error, res, body) => {
    if (error || res.statusCode !== 200) {
      return reject(error)
    } else {
      try {
        body = JSON.parse(body)
      } catch (e) {}
      return resolve(body)
    }
  })
})

module.exports = request
