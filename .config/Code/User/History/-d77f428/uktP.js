let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    let newSentence = sentence.slice
    console.log("true")
    console.log(newSentence)
}
console.log(sentence)