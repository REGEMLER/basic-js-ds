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
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {

  constructor(){
    this.start = null;
    this.finish = null;
  }
  
  getUnderlyingList() {
    return this.finish;
  }

  enqueue( value ) {
    let node = new ListNode(value);

    if (!this.finish) {
      this.finish = node;
      this.start = node;
    } else {
      this.start.next = node;
      this.start = node;
    }
    return this.getUnderlyingList();
  }

  dequeue() {
    if (!this.finish) {
      return null;
    }
    let result = this.finish.value;
    this.finish = this.finish.next;

    if (!this.finish) {
      this.start = null;
    }
    return result;
  }
}

module.exports = {
  Queue
};
