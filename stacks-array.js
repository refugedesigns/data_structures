class Stack {
    constructor() {
        this.list = []
    }

    push(value) {
        this.list.push(value)
    }

    pop() {
        return this.list.pop()
    }

    isEmpty() {
        return this.list.length === 0
    }

    toArray() {
        return this.list.slice()
    }
}

const stack = new Stack()

stack.push("Walk the dog")
stack.push("Wash dishes")
stack.push("Clean the toilet")
stack.push("Bake the cake")

console.log(stack.toArray())

console.log(stack.pop())

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty())