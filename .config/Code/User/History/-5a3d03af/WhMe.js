function playTheGame() {
    let answer = confirm ("want to play the game?")
    if (answer == true) {
        let userNumber = parseFloat(prompt ("enter a number 1-10"))

        if (isNaN (userNumber)) {
            alert ('Sorry Not a number, Goodbye') 
        } else if ((userNumber <= 10) && (userNumber >= 0)){



    } else if (isNaN (userNumer)){
        alert ('No problem, Goodbye');
    }
    const computerNumber = (Math.floor(Math.random() * 11))
    compareNumbers(userNumber, computerNumber)

    }}
function compareNumbers(userNumber,computerNumber) {
    let attempts = 1
    while (attempts <= 10) {
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
