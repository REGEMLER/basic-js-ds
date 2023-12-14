const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.item = null;
  }

  root() {
    return this.item
  }

  add( data ) {
    function add (node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = add(node.left, data);
      } else node.right = add(node.right, data);
      return node;
    };
    this.item = add(this.item, data);
  }

  has( data ) {
    function has (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return node.data > data ?  has(node.left, data) :
      has(node.right, data);
    };
    return has(this.item, data);
  }

  find( data ) {
    function find (node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return node.data > data ? find(node.left, data) :
      find(node.right, data);
    };
    return find(this.item, data);
  }

  remove( data ) {
    function remove (node, data) {
      if (!node) return false;

      if (node.data > data) {
        node.left = remove(node.left, data);
      } else if (node.data < data) {
        node.right = remove(node.right, data);
      } else {
        
        if (!node.left && !node.right) return false;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let min = node.right;
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = remove(node.right, min.data);
      }
      return node;
    };
    this.item = remove(this.item, data);
  }

  min() {
    if (!this.root) return false;

    let node = this.item;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) return false;

    let node = this.item;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};