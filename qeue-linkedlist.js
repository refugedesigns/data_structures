import LinkedList from "./linked-list.js";

class Qeue {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.append(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const qeue = new Qeue();

qeue.push("Clean the toilet");
qeue.push("Visit the market");
qeue.push("Go to hospital");
qeue.push("Do homework");
qeue.push("Prepare supper");
qeue.push("Clean the room");

console.log(qeue.toArray());

console.log(qeue.pop());
console.log(qeue.pop());
console.log(qeue.pop());

console.log(qeue.toArray());

console.log(qeue.isEmpty());

console.log(qeue.pop());
console.log(qeue.pop());
console.log(qeue.pop());

console.log(qeue.toArray());

console.log(qeue.isEmpty());
