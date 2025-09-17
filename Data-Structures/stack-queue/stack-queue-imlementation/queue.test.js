const Queue = require('./queue');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('enqueue node to queue', () => {
        queue.enqueue(10);
        expect(queue.peek()).toBe(10);
    });

    test('dequeue node from queue', () => {
        queue.enqueue(20);
        expect(queue.dequeue()).toBe(20);
    });

    test('check if queue is empty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(30);
        expect(queue.isEmpty()).toBe(false);
    });
});
