class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.parent = parentNode;
    this.value = value;
  }

  addNode(value) {
    const node = new Node(value, this);
    this.children.push(node);
    return {
      node,
      index: this.children.length - 1,
    };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

const filesystem = new Tree("/");
const documents = filesystem.root.addNode("/documents");
const games = filesystem.root.addNode("/games");
documents.node.addNode("result.txt");
games.node.addNode("cod.exe");

console.log(filesystem);
