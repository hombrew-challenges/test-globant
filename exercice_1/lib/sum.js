const curry2 = require('../utils/curry2')

const sum = curry2((a, b) => Number(a) + Number(b))


module.exports = sum
