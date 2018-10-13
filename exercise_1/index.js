const sum = require('./lib/sum')

const case0 = sum()
const case1 = case0(1)
const case2 = case1()
const result1 = case2(3)
const case3 = case0(1, 2)

console.log('sum(): ', case0, '\n\n------\n') // func
console.log('case0(1): ', case1, '\n\n------\n') // func
console.log('case1(): ', case2, '\n\n------\n') // func
console.log('case2(3): ', result1, '\n\n------\n') // 4
console.log('case0(1, 2): ', case3, '\n\n------\n') // 3
