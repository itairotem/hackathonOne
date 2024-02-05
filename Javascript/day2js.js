//Excercise 1
let x = 5;
let y = 2;
if (x > y) {
    console.log("x is the biggest number")
}

// Exercise 2: Chihuahua
let newDog = "Chihuahua"
console.log(newDog.length+1)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
if (newDog =="Chihuahua") {
    console.log("I love Chihuahuas, its my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
}

//Exercise 3: Even Or Odd
let number = prompt("Write a number")
console.log(number)
if ((number%2)==0) {
    console.log(number +" is an even number")
} else if ((number%2)==1){
    console.log(number +" is an odd number")
}

// Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length);
if (users.length == 0) {
    console.log("no one is online");
} else if (users.length == 1) {
    console.log(users [0]);
} else if (users.length >= 2) {
    console.log(users[0]+', '+users[1]+' and '+users.length-2 + ' more are online');
}