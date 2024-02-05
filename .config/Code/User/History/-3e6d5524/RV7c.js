let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    let newSentence = sentence.splice((wordNot, (wordBad+3)), "good")
    console.log("true")
    console.log(newSentence)
}
console.log(sentence)