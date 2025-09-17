const Stack = require('./stack');
const Queue = require('./queue');

console.log('=== Stack Demo ===');
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.isEmpty()); // false
stack.pop();//remove 20
stack.pop();//remove 10
console.log(stack.isEmpty()); // true

console.log('\n=== Queue Demo ===');
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.isEmpty()); // false
queue.dequeue();//remove 20
queue.dequeue();//remove 30
console.log(queue.isEmpty()); // true
