const sum = require('./lib/sum')

const case0 = sum()
const case1 = case0(1)
const case2 = case1()
const result1 = case2(3)
const result2 = case0(1, 2)

console.log('curried: ', result1)
console.log('not curried: ', result2)
