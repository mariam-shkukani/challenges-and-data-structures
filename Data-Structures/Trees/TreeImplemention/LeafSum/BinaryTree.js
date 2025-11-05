const Node = require('./Nod');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  setRoot(node) {
    if (!(node instanceof Node)) throw new TypeError('root must be a Node');
    this.root = node;
  }

  sumOfLeafNodes() {
    try {
      if (!this.root) return 0; 

      const dfs = (node) => {
        if (!node) return 0;
        if (!node.left && !node.right) {
          const val = Number(node.value);
          if (Number.isNaN(val)) throw new TypeError('Node value must be a number');
          return val;
        }
        return dfs(node.left) + dfs(node.right);
      };

      const result = dfs(this.root);
      if (!Number.isFinite(result)) throw new Error('Sum resulted in non-finite number');
      return result;
    } catch (err) {
      console.error('Error in sumOfLeafNodes:', err.message);
      throw err; 
    }
  }
}

module.exports = BinaryTree;
