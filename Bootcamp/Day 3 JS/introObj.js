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
let user = {
    userName : 'simgabrob',
    password : '12345678'
}
let users = [user]
console.log(users);
let newsfeed = [
    {userName : 'simgabrob',
    timeline : 'posts'},
    {userName : 'simgab',
    timeline : 'posts'},
    {userName : 'sim',
    timeline : 'posts'},
]

console.log(newsfeed);
console.log(newsfeed[0].userName);