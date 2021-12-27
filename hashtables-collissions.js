class HashTable {
  constructor() {
    this.size = 100;
    this.buckets = Array(this.size)
      .fill(null)
      .map(() => []);
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
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => element.key === key);

    if (storedElement) {
      storedElement.val = value;
    } else {
      bucketArray.push({ key: key, val: value });
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => element.key === key);

    return storedElement;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key].length > 0) {
        console.log(key, this.buckets[key]);
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

for (const char of "testing to see if there will be collission here") {
  table.set(char, char);
}

table.showInfo();
