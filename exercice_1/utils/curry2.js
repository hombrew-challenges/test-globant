const curry1 = require('./curry1')

const curry2 = (fn) => {
  const f2 = (...args) => {
    switch (args.length) {
      case 0:
        return f2
      case 1:
        const [a] = args
        return curry1((altB) => fn(a, altB))
      default:
        return fn(...args)
    }
  }

  return f2
}

module.exports = curry2
