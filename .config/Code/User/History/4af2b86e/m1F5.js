// // Exercise 1 : List Of People
// //Part I - Review About Arrays
// const people = ["Greg", "Mary", "Devon", "James"];
// //2
// for (let i=0; i<people.length; i++) {
//     if (people[i]== "Greg") {
//         people.splice(i, 1)
//     }
//     }
// for (let i=0; i<people.length; i++) {
// if (people[i]== "James") {
//     people.splice(i, 1, "Jason")
//     console.log(people);
// }
// }
// people.push("Simon")
// console.log(people);
// console.log(people.indexOf("Mary"));
// console.log(people.indexOf("Foo"));
// let copyPeople = [];
// for (let i=0; i<people.length; i++) {
//     copyPeople.push(people[i])
// }
// console.log(copyPeople);
// let last = people[people.length-1]
// console.log(last);

// //Part II - Loops
// for (let i=0; i<people.length; i++) {
//     console.log(people[i]);
// }
// for (let i=0; i<people.length; i++) {
//     if (people[i] =="Devon") {
//         break;}
//     console.log(people[i]);
// }

// //Exercise 2 : Your Favorite Colors
// const colors = ['green', 'red', 'orange', 'yellow', 'purple']
// for (let i=0; i<colors.length; i++) {
//     console.log('My #'+(i+1)+' choice is '+colors[i]);
// }
//Bonus

//Exercise 3 : Repeat The Question4
// let num = Number(prompt("choose a number"))
// while (num < 10) {
//     num = Number(prompt("choose a number"))
//     console.log("true");
//   }
//   console.log("done");

//Exercise 4 : Building Management
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// //Review About Objects
// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1] + ' ' + building.numberOfRoomsAndRent['dan'][0]);
// let sarahRent = building.numberOfRoomsAndRent['sarah'][1];
// let davidRent = building.numberOfRoomsAndRent['david'][1];
// let danRent = building.numberOfRoomsAndRent['dan'][1];

// if ((sarahRent+davidRent)>danRent) {
//     danRent = danRent +1200
// } else {

// }

//Exercise 5 : Family
const family = {
    

}

//Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
for (let i=0; i<3; i++) {
    console.log();
}