class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        const node = new Node(data);
        if (!this.rear) {
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
    }

    dequeue() {
        if (!this.front) return null;
        const dequeued = this.front;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        return dequeued.data;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }
}

module.exports = Queue;
