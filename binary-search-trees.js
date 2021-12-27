class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.parent = null;
  }

  add(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }

    if (this.value < value) {
      if (this.right) {
        this.right.add(value);
        return;
      }
      const newNode = new Node(value);
      newNode.parent = this;
      this.right = newNode;
      return;
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value);
        return;
      }
      const newNode = new Node(value);
      newNode.parent = this;
      this.left = newNode;
      return;
    }
  }

  remove(value) {
    const identifiedNode = this.find(value);

    if (!identifiedNode) {
      throw new Error("Could not find a node with that value.");
    }

    if (!identifiedNode.right && !identifiedNode.left) {
      const idenfiedParent = identifiedNode.parent;
      idenfiedParent.removeChild(identifiedNode);
      return;
    }

    if (identifiedNode.right && identifiedNode.left) {
      const nextBiggerNode = identifiedNode.right.findNext();
      if (nextBiggerNode.value !== identifiedNode.right.value) {
        this.remove(nextBiggerNode.value);
        identifiedNode.value = nextBiggerNode.value;
      } else {
        identifiedNode.value = identifiedNode.right.value;
        identifiedNode.right = identifiedNode.right.right;
      }
    } else {
      const childNode = identifiedNode.right || identifiedNode.left;
      identifiedNode.left = childNode.left;
      identifiedNode.right = childNode.right;
      identifiedNode.value = childNode.value;
    }

    if (identifiedNode.left) {
      identifiedNode.left.parent = identifiedNode;
    }

    if (identifiedNode.right) {
      identifiedNode.right.parent = identifiedNode;
    }
  }

  findNext() {
    if (!this.left) {
      return this;
    }

    return this.left.findNext();
  }

  removeChild(node) {
    if (this.right && this.right === node) {
      this.right = null;
      return;
    }

    if (this.left && this.left === node) {
      this.left = null;
      return;
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.value < value && this.right) {
      return this.right.find(value);
    }

    if (this.value > value && this.left) {
      return this.left.find(value);
    }

    return null;
  }
}

class Tree {
  constructor() {
    this.root = new Node(null);
  }

  add(value) {
    this.root.add(value);
  }

  find(value) {
    return this.root.find(value);
  }

  remove(value) {
    this.root.remove(value);
  }
}


const tree = new Tree();

tree.add(10);
tree.add(3);
tree.add(5);
tree.add(-4);
tree.add(12);
tree.add(9);
tree.add(20);

tree.remove(5);
console.log(tree.find(5));

console.log(tree);
