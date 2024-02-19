function playTheGame() {
    let answer = confirm ("want to play the game?")
    if (answer == true) {
        let userNumber = prompt ("enter a number 1-10")


        userNumber = Number(userNumber)
        if (typeof userNumber != "number") {
            alert ('Sorry Not a number, Goodbye')
        } 

        if ((userNumber <= 10) && (userNumber >= 0)) {
            const computerNumber = (Math.floor(Math.random() * 10))
            console.log(computerNumber);
        }
    } else {
        alert ('No problem, Goodbye');
    }

}

function compareNumbers(userNumber,computerNumber) {
    while (condition) {
        if (userNumber == computerNumber) {
            alert ("WINNER")
            {break;}
        } else if (userNumber >= computerNumber) {
            alert ("too high")
        } else if (userNumber <= computerNumber) {
            alert ("too low")
        }
    }


}
