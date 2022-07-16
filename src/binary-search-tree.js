const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(data = null, left = null, right = null, stack = []) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.stack = stack;
  }

  root() {
    if (!this.data) return null;
    return {
      'data': this.data,
      'left': this.left === null ? null : this.left.root(),
      'right': this.right === null ? null : this.right.root()
    };
  }

  add(data) {
    this.stack.push(data);

    if (this.data === null) {
      this.data = data;
    } else if (this.data > data) {
      this.left = !this.left ? new BinarySearchTree().add(data) : this.left.add(data);
    } else if (this.data < data) {
      this.right = !this.right ? new BinarySearchTree().add(data) : this.right.add(data);
    }

    return this;
  }

  has(data) {
    if (this.data === data) {
      return true;
    } else if (this.data > data) {
      return !this.left ? false : this.left.has(data);
    } else if (this.data < data) {
      return !this.right ? false : this.right.has(data);
    }
  }

  find(data) {
    if (this.data === data) {
      return {'data': data};
    } else if (this.data > data) {
      return !this.left ? null : this.left.find(data);
    } else if (this.data < data) {
      return !this.right ? null : this.right.find(data);
    }
  }

  remove(data) {
    let new_stack = [];
    this.stack.map(a => data === a ? a : new_stack.push(a));
    this.stack = new_stack;
    
    if (this.data === data) {
      this.data = null;
      this.length = null;
      this.right = null;
      this.stack.forEach(value => this.add(value));
    } else if (this.data > data) {
      this.left.remove(data);
    } else if (this.data < data) {
      this.right.remove(data);
    }
    
    return this;
  }

  min() {
    if (this.left) {
      return this.left.min();
    } else {
      return this.data;
    }
  }

  max() {
    if (this.right) {
      return this.right.max();
    } else {
      return this.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};