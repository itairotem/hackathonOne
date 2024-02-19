function playTheGame() {
    let answer = confirm ("want to play the game?")
    if (answer == true) {
        let userNumber = parseFloat(prompt ("enter a number 1-10"))

        if (isNaN (userNumber)) {
            alert ('Sorry this is not a number, Goodbye') 
        } else if ((userNumber <= 10) && (userNumber >= 1)){
         let computerNumber = ((Math.floor(Math.random() * 10))+1)
        compareNumbers(userNumber, computerNumber)
        }
    } else if (answer == false) {
        alert ('No problem, Goodbye');

    }


}
function compareNumbers(userNumber,computerNumber) {
    let attempts = 1
    while (attempts < 3) {
        if (userNumber == computerNumber) {
            alert ("WINNER")
            {break}
        } else if (userNumber > computerNumber) {
            userNumber = prompt ("too high")
        } else if (userNumber < computerNumber) {
            userNumber = prompt ("too low")
        }
        attempts++;
        if (attempts == 3) {
            alert ("out of chances! You Lost")
        }
    }

}
