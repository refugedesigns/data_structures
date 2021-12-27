class HashTable {
  constructor() {
    this.size = 1000;
    this.buckets = Array(this.size).fill(null);
  }

  hash(key) {
    let hash = 0;

    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);

    for (let i = keyHash; i < this.buckets.length; i++) {
      if (
        this.buckets[keyHash] === null ||
        this.buckets[keyHash].key === key
      ) {
        this.buckets[keyHash] = {key, val: value}
      } else {
        while (this.buckets[keyHash] !== null) {
          keyHash++
        }
        this.buckets[keyHash] = {key, val: value}
      }
    }
  }

  get(key) {
    const keyHash = this.hash(key)
    for (let i = keyHash ; i < this.buckets.length; i++) {
      if (this.buckets[i] === null) {
        continue
      }
      if (this.buckets[i].key === key) {
        return this.buckets[i].val
      }
    }
    return null
  }

  showInfo() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] !== null) {
        console.log(i, this.buckets[i])
      }
    }
  }
}

const table = new HashTable();

for (const char of "acadamind") {
  table.set(char, char);
}

for (const char of "Hello") {
  table.set(char, char);
}

for (const char of "does this work") {
  table.set(char, char);
}


table.showInfo();
