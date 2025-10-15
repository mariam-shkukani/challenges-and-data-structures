const { BinaryTree, Node } = require('./SecondMaxValue');

test('Example tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);

    expect(tree.findSecondMax()).toBe(20);
});

test('Single node tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    expect(tree.findSecondMax()).toBe(null);
});

test('Tree with negative values', () => {
    let tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-20);
    tree.root.right = new Node(-5);
    expect(tree.findSecondMax()).toBe(-10);
});
