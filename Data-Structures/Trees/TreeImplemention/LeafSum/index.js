const Node = require('./Nod');
const BinaryTree = require('./BinaryTree');

function demo() {
  const Btree = new BinaryTree();

  Btree.root = new Node(9);
  Btree.root.left = new Node(8);
  Btree.root.right = new Node(12);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  Btree.root.right.left = new Node(17);
  Btree.root.right.right = new Node(23);
  Btree.root.left.left.right = new Node(4);

  console.log('Tree levels (roughly):');
  console.log('9');
  console.log('8 12');
  console.log('3 7 17 23');
  console.log('4');
  console.log('\nLeaf nodes are 4, 7, 17, and 23.');

  const leafSum = Btree.sumOfLeafNodes();
  console.log('\nSum = 4 + 7 + 17 + 23 =', leafSum);
}

demo();
