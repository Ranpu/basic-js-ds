const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(data = undefined, prev = undefined) {
    this.data = data;
    this.prev = prev;
  }

  push(element) {
    if (this.data === undefined) {
      this.data = element;
    } else {
      this.prev = new Stack(this.data, this.prev);
      this.data = element;
    }

    return this;
  }

  pop() {
    let getData = this.data;
    this.data = !this.prev ? undefined : this.prev.data;
    this.prev = !this.prev ? undefined : this.prev.prev;
    return getData;
  }

  peek() {
      return this.data;
  }
}

module.exports = {
  Stack
};
