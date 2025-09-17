class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        if (!this.top) return null;
        const popped = this.top;
        this.top = this.top.next;
        return popped.data;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.top === null;
    }
}

module.exports = Stack;
