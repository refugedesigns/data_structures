/*
Linked List is a data structure 
in which all the nodes knows about 
the next element in line
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let curNode = this.head;

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }

      if (this.tail.value === value) {
        this.tail = curNode;
      }
    }

    return null;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedValue = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedValue;
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let curNode = this.head;

    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return null;
  }

  toArray() {
    const elements = [];

    let curNode = this.head;

    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }
}

const linkedList = new LinkedList();

linkedList.append("Hello");
linkedList.append("Population");
linkedList.append("Kingdom");
linkedList.append("Whatsapp");
linkedList.append("Hello");
linkedList.prepend("Testing");
linkedList.delete("Whatsapp");
linkedList.delete("Hello");
console.log(linkedList.find("Testing"));
linkedList.insertAfter("Testing123", "Kingdom");
linkedList.insertAfter("Census", "Population");

console.log(linkedList.toArray());
