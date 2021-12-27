class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.parent = parentNode;
    this.value = value;
  }

  addNode(value) {
    const segments = value.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const node = new Node(segments[0], this);
      this.children.push(node);
      return node
    }
    const existingChildNode = this.children.find(
      (node) => node.value === segments[0]
    );

    if (existingChildNode) {
      existingChildNode.addNode(segments.slice(1).join("/"));
    } else {
      const node = new Node(segments[0], this);
      node.addNode(segments.slice(1).join("/"));
      this.children.push(node);
      return node
    }
  }

  removeNode(path) {
    const segments = path.split("/");

    if (segments.length === 0) {
      return;
    }

    if (segments.length === 1) {
      const existingNodeIndex = this.children.findIndex(
        (child) => child.value === segments[0]
      );

      if (existingNodeIndex < 0) {
        throw new Error("Could not find matching value.");
      }
      this.children.splice(existingNodeIndex, 1);
    }

    if (segments.length > 1) {
      const existingChildNode = this.children.find(
        (child) => child.value === segments[0]
      );
      if (!existingChildNode) {
        throw new Error(
          "Could not find matching path. Path segment: " + segments[0]
        );
      }
      existingChildNode.removeNode(segments.slice(1).join("/"));
    }
  }

  // find(value) {
  //   // Depth-first search - Traversing a tree
  //   for (const child of this.children) {
  //     if (child.value === value) {
  //       return child;
  //     }
  //     const nestedChildNode = child.find(value);
  //     if (nestedChildNode) {
  //       return nestedChildNode;
  //     }
  //   }
  // }

  find(value) {
    //Breath-first search - Travesing a tree
    for(const child of this.children) {
      if(child.value === value) {
        return value
      }
    }
    for(const child of this.children) {
      const nestedChildNode = child.find(value)
      if(nestedChildNode) {
        return nestedChildNode
      }
    }
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  add(path) {
    this.root.addNode(path);
  }

  remove(path) {
    this.root.removeNode(path);
  }

  find(value) {
    if (this.root.value === value) {
      return this.root;
    }
   return this.root.find(value);
  }
}

const filesystem = new Tree("/");
filesystem.add("documents/personal/result.txt");
filesystem.add("games/cod.exe");
filesystem.add("games/cod2.exe");
filesystem.remove("games/cod.exe");

console.log(filesystem.find("personal"));
