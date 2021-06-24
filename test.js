const roundRobin = require('./index');

const returnNext = roundRobin([1, 2, 3]);

console.log(returnNext());
//> 1
console.log(returnNext());
//> 2
console.log(returnNext());
//> 3
console.log(returnNext());
//> 1 