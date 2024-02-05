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
myWatchedSeries[2]="friends"
myWatchedSeries.push("Simpsons")
myWatchedSeries.unshift("Family Guy")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1])
console.log(myWatchedSeries)

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

typeof(15)
// Prediction:variable
// Actual:number

typeof(5.5)
// Prediction:variable
// Actual:number

typeof(NaN)
// Prediction:number
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:NaN

typeof(1 != 2)
// Prediction:true
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN

"1" + "3"
// Prediction:4
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:?
// Actual:NaN

99 * "hello"
// Prediction:99hello
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:False
// Actual:false



//Exercise 6 : Guess The Answers #3
5 + "34"
// Prediction:534
// Actual:534
console.log(5 - "4")
5 - "4"
// Prediction:NaN
// Actual:1

10 % 5
// Prediction:2
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:  
// Actual:  

" " + 0
// Prediction: 0
// Actual: 0

true + true
// Prediction:true
// Actual:2

true + false
// Prediction:false
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN
// Actual:NaN
