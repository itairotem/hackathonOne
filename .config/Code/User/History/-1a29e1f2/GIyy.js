//Exercise 1: Your Favorite Food
let favFood = "pizza"

let favMeal = "dinner"

console.log('I eat ' + favFood + ' at every ' + favMeal)
//Exercise 2 : Series
//Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
console.log(myWatchedSeriesLength)
let myWatchedSeriesSentence = ('I watched '+myWatchedSeriesLength+ ' series: '+ myWatchedSeries[0]+', '+myWatchedSeries[1]+', and '+ myWatchedSeries[2])
console.log(myWatchedSeriesSentence)

//Part 2


//Exercise 3 : The Temperature Converter
let tempC= 10
let tempF= tempC/5
tempF=tempF*9
tempF=tempF+32
console.log(tempC+' °C is '+ tempF+' °F')



//Exercise 4 : Guess The Answers #1
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23

//question 3
//c=nothing
console.log(3 + 4 + '5');

//Exercise 5 : Guess The Answers #2

console.log(typeof(15))
// Prediction:variable
// Actual:number

console.log(typeof(5.5))
// Prediction:variable
// Actual:number

console.log(typeof(NaN))
// Prediction:number
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

typeof(true)
// Prediction:
// Actual:

typeof(1 != 2)
// Prediction:
// Actual:

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:hamburger

console.log("1" + "3")
// Prediction:4
// Actual:13

console.log("1" - "3")
// Prediction:-2
// Actual:-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction:?
// Actual:NaN

99 * "hello"
// Prediction:99hello
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual: