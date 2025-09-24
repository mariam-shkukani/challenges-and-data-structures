
const MinStack = require('./minstack');

const minStack = new MinStack();

// Push elements
minStack.push(15); // Top -> 15 (min: 15)
minStack.push(7);  // Top -> 7 -> 15 (min: 7)
minStack.push(12); // Top -> 12 -> 7 -> 15
minStack.push(3);  // Top -> 3 -> 12 -> 7 -> 15

// Print the stack
minStack.printStack(); // Output: Top -> 3 -> 12 -> 7 -> 15

// Get the minimum element
console.log('min:', minStack.getMin()); // min: 3

// Pop a node from the stack
const popped = minStack.pop(); // popped: 3
console.log('popped:', popped);

// Print again
minStack.printStack(); // Output: Top -> 12 -> 7 -> 15

// Get the new minimum element
console.log('min:', minStack.getMin()); // min: 7

// Peek the top node
console.log('peeked:', minStack.top()); // peeked: 12

// Push another element
minStack.push(2); // Top -> 2 -> 12 -> 7 -> 15

minStack.printStack(); // Output: Top -> 2 -> 12 -> 7 -> 15

// Get the new minimum element
console.log('min:', minStack.getMin()); // min: 2

// Check if empty
console.log('isEmpty:', minStack.isEmpty()); // isEmpty: false
