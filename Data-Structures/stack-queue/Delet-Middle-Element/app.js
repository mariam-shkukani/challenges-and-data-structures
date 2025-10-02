
const StackWithDeleteMiddle = require('./stack-with-deletmiddle');

const stack = new StackWithDeleteMiddle();

stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log('**befor deleting:', stack.toString());

const deleted1 = stack.deleteMiddle();
console.log('**deleted', deleted1);
console.log('**after deleting the middle:', stack.toString());

stack.push(2);
stack.push(9);
stack.push(11);
console.log('**after adding 3 elements:', stack.toString());

stack.deleteMiddle();
console.log('**after deleting the middle again:', stack.toString());
