class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    findSecondMax() {
        if (!this.root) return null;

        let max = -Infinity;
        let secondMax = -Infinity;

        function traverse(node) {
            if (!node) return;

            if (node.value > max) {
                secondMax = max;
                max = node.value;
            } else if (node.value > secondMax && node.value < max) {
                secondMax = node.value;
            }

            traverse(node.left);
            traverse(node.right);
        }

        traverse(this.root);

        return secondMax === -Infinity ? null : secondMax;
    }
}

// ==== out put examples ====
function runExamples() {
    // example 1
    let tree1 = new BinaryTree();
    tree1.root = new Node(10);
    tree1.root.left = new Node(5);
    tree1.root.right = new Node(20);
    tree1.root.left.left = new Node(3);
    tree1.root.left.right = new Node(7);
    tree1.root.right.left = new Node(15);
    tree1.root.right.right = new Node(25);
    console.log("Second Max (example 1):", tree1.findSecondMax()); // 20

    // example 2
    let tree2 = new BinaryTree();
    tree2.root = new Node(10);
    console.log("Second Max (example 2):", tree2.findSecondMax()); // null

    // example 3
    let tree3 = new BinaryTree();
    tree3.root = new Node(-10);
    tree3.root.left = new Node(-20);
    tree3.root.right = new Node(-5);
    console.log("Second Max (example 3):", tree3.findSecondMax()); // -10
}

runExamples();

module.exports = { Node, BinaryTree };
