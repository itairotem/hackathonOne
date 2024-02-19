// Exercise 1 : Information
function infoAboutMe() {
    console.log("Hello, I am Simon, I am 18 years old and love robotics and music");
}
infoAboutMe ()

//Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("You name is " + personName + ", you are " + personAge + "years old, your favorite color is " + personFavoriteColor);
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//Exercise 3 : Find The Numbers Divisible By 23
function isDivisible() {
let num = [];
    for (let i=0;i<500; i++)
        if (i%23 == 0) {
            num.push(i)
        }
        console.log(num);
    for (let i = 0; i < num.length; i++) {
            let sum = num[i];
            console.log(sum);
}}
isDivisible ()
