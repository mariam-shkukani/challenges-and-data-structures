const Stack = require('./stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    test('push node to stack', () => {
        stack.push(10);
        expect(stack.peek()).toBe(10);
    });

    test('pop node from stack', () => {
        stack.push(20);
        expect(stack.pop()).toBe(20);
    });

    test('check if stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(30);
        expect(stack.isEmpty()).toBe(false);
    });
});
