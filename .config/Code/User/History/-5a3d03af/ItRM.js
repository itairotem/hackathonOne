function playTheGame() {
    let answer = confirm ("want to play the game?")
    if (answer == true) {
        let userNumber = parseFloat(prompt ("enter a number 1-10"))

        if (isNaN (userNumer)) {
            alert ('No problem, Goodbye');
        }
        if (typeof userNumber != "number") {
            alert ('Sorry Not a number, Goodbye')
        } 

        if ((userNumber <= 10) && (userNumber >= 0)) {
            const computerNumber = (Math.floor(Math.random() * 10))
            console.log(computerNumber);
        }

    }

}

function compareNumbers(userNumber,computerNumber) {
    let attempts = 1
    while (attempts <= 3) {
        if (userNumber == computerNumber) {
            alert ("WINNER")
            {break;}
        } else if (userNumber > computerNumber) {
            userNumber = prompt ("too high")
        } else if (userNumber < computerNumber) {
            userNumber = prompt ("too low")
        }
        attempts++;
    }


}
