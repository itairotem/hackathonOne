const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits.sort()
fruits.push("kiwi")
fruits.splice(0,1)
fruits.reverse()
console.log(fruits)

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits)