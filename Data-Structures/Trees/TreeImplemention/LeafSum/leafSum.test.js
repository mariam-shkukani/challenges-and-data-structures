const Node = require('./Nod');
const BinaryTree = require('./BinaryTree');

test('sum of leaf nodes - example (positive values)', () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(9);
  Btree.root.left = new Node(8);
  Btree.root.right = new Node(12);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  Btree.root.right.left = new Node(17);
  Btree.root.right.right = new Node(23);
  Btree.root.left.left.right = new Node(4);

  expect(Btree.sumOfLeafNodes()).toBe(51);
});

test('sum of leaf nodes - negative leaf values', () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(0);
  Btree.root.left = new Node(-5);
  Btree.root.right = new Node(10);
  Btree.root.left.left = new Node(-2); 
  Btree.root.left.right = new Node(-3); 
  Btree.root.right.right = new Node(4); 

  expect(Btree.sumOfLeafNodes()).toBe(-1);
});
