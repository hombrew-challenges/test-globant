const curry1 = (fn) => {
  const f1 = (...args) => args.length === 0
    ? f1
    : fn(...args)

  return f1
}

module.exports = curry1
