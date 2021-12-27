//First in First Out (FIFO)

class Qeue {
    constructor() {
        this.list = []
    }

    push(value) {
        this.list.push(value)
    }

    pop() {
        return this.list.shift()
    }

    isEmpty() {
        return this.list.length === 0
    }

    toArray() {
        return this.list.slice()
    }
}

const qeue = new Qeue()

qeue.push("Clean the toilet")
qeue.push("Visit the market")
qeue.push("Go to hospital")
qeue.push("Do homework")
qeue.push("Prepare supper")
qeue.push("Clean the room")

console.log(qeue.toArray())

console.log(qeue.pop())
console.log(qeue.pop())
console.log(qeue.pop())

console.log(qeue.toArray());

console.log(qeue.isEmpty())

console.log(qeue.pop());
console.log(qeue.pop());
console.log(qeue.pop());

console.log(qeue.toArray());

console.log(qeue.isEmpty());