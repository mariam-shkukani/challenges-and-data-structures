const removeMiddleValue = require('./removeMiddleValue');

console.log(removeMiddleValue([1, 2, 3, 4, 5]));        // [1, 2, 4, 5]
console.log(removeMiddleValue([27, 8, 15, 73, 27]));    // [27, 8, 73, 27]
console.log(removeMiddleValue([7, 9, 13, 25, 5, 17]));  // [7, 9, 13, 5, 17]