//Objects
let teacher = {
    fullName : 'Simon Robbins', 
    subject : 'Math',
    role : 'student',
    salary : 25000, 

}
console.log(teacher.fullName);
//add
teacher.subject = 'English'
teacher.age = 70;
console.log(teacher);
//delete
delete teacher.age
console.log(teacher);

//Excercise 1
let info = {
    username : 'simgabrob',
    password : 'abcdefg',
}
const database = [info]
const newsfeed = 