const numbers = [1, 4, 8, 10, 2, 5, "Erasmus", {name: "Philo", age: 27}]

console.log(numbers[6])
console.log(numbers.findIndex(el => el === 10))

// Sets
const set = new Set([])

set.add("Erasmus")
set.add("Philo")
set.add("Mum")
set.add(1)
set.add("Kingdom Hall")

console.log(set)
set.delete("Philo")
console.log(set.has("Philo"))
console.log(set)

/*
Arrays VS Sets
1.Order is kept in Arrays but not in Sets
2.Duplicate items are allowed in Arrays but not in sets
3.Items in arrays are retrieved by Index, Items are retrieved by .has() method in sets
4.Items are added to arrays by .push() or .unshift() method, items are added to sets by .add() method
*/


//Objects
const person = {
    firstName: "Erasmus",
    age: 32,
    hobbies: ["Coding", "Reading"]
}

console.log(person["firstName"])

person.lastName = "Antwi"

console.log(person)

delete person.firstName

console.log(person)

//Maps
const map = new Map()

map.set("Accra", 900)
map.set("Population", 200)
map.set("Country", "Australia")
map.set("Name", "Erasmus")
map.set("ID", "abcde")
map.set("Time", new Date())

console.log(map)

for(const el of map) {
    console.log(el)
}

console.log(map.get("Time"))

map.delete("Country")

console.log(map)