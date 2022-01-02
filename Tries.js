class TrieNode {
    constructor() {
        this.value = null 
        this.children = []
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(key, value) {
        let node = this.root
        for(let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) - 97
            if(!node.children[alphabetIndex]) {
                const newNode = new TrieNode()
                node.children[alphabetIndex] = newNode
            }
            node = node.children[alphabetIndex]
        }
        node.value = value
    }

    find(key) {
        let node = this.root 

        for(let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) - 97 

            if(!node.children[alphabetIndex]) {
                return false
            }

            node = node.children[alphabetIndex]
        }

        if(node.value === null) return false
        
        return node
    }

    remove(key) {
        const node = this.find(key)

        return node
    }
}

const trie = new Trie()

trie.insert("age", 32)
trie.insert("name", "Eras")
trie.insert("names", ["Eric", "Sam"])

console.log(trie)

console.log(trie.find("age"))