// Exercise 1 : List Of People
//Part I - Review About Arrays
const people = ["Greg", "Mary", "Devon", "James"];
//2
for (let i=0; i<people.length; i++) {
    if (people[i]== "Greg") {
        people.splice(i, 1)
    }
    }
for (let i=0; i<people.length; i++) {
if (people[i]== "James") {
    people.splice(i, 1, "Jason")
    console.log(people);
}
}
people.push("Simon")
console.log(people);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
let copyPeople = [];
for (let i=0; i<people.length; i++) {
    copyPeople.push(people[i])
}
console.log(copyPeople);
let last = people[people.length-1]
console.log(last);

//Part II - Loops
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}
for (let i=0; i<people.length; i++) {
    if (people[i] =="Devon") {
        break;}
    console.log(people[i]);
}

//Exercise 2 : Your Favorite Colors
const colors = ['green', 'red', 'orange', 'yellow', 'purple']
for (let i=0; i<colors.length; i++) {
    console.log('My #'+(i+1)+' choice is '+colors[i]);
}
//Bonus

//Exercise 3 : Repeat The Question
let num = Number(prompt("choose a number"))
while (num < 10) {
    num = Number(prompt("choose a number"))
    console.log("true");
  }
  console.log("done");