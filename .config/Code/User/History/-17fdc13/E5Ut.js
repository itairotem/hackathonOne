let person1 = prompt("person 1 age")
let person2 = prompt("person 2 age")
person1 = 2023 - person1
person2 = 2023 - person2
let olderPerson;
let youngerPerson;
//now I have ages
if (person1 > person2) {
//person1 is older
olderPerson = person1
youngerPerson = person2

} else if (person1 < person2) {
//person2 is older
olderPerson = person2
youngerPerson = person1

}