const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  getUnderlyingList() {
    return {
      'value': this.value,
      'next': this.next
  }
  }

  enqueue(value) {
    if (this.value === null) {
      this.value = value;
    } else if (this.next === null) {
      this.next = new Queue(value);
    } else {
      this.next.enqueue(value)
    }
  }

  dequeue() {
    let firstInQueue = this.value;
    this.value = this.next ? this.next.value : null;
    this.next = this.next ? this.next.next : null;
    return firstInQueue;
  }
}

module.exports = {
  Queue
};
