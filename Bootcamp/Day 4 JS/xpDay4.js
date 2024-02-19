// // Exercise 1 : Information
// function infoAboutMe() {
//     console.log("Hello, I am Simon, I am 18 years old and love robotics and music");
// }
// infoAboutMe ()

// //Part 2
// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log("You name is " + personName + ", you are " + personAge + "years old, your favorite color is " + personFavoriteColor);
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

//Exercise 2 : Tips
function calculateTip() {
    let money = prompt ("how much is the bill?")
    let tip = 0;
    if (money < 50) {
        tip = money*1.2
    } else if ((money >= 50) && (money <= 200)) {
        tip = money*1.15
    } else if (money > 200) {
        tip = money*1.1 
    }
    tip = Math.round(tip)
    console.log(tip);
}

calculateTip ()


// //Exercise 3 : Find The Numbers Divisible By 23
// function isDivisible() {
// let num = [];
// let sum = 0;
//     for (let i=0;i<500; i++)
//         if (i%23 == 0) {
//             num.push(i)
//         }
//         console.log(num);
//     for (let i = 0; i < num.length; i++) {
//             sum = sum + num[i];
//            }
//            console.log(sum);
// }
// isDivisible ()

