let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    let newSentence1 = sentence.slice(0,wordNot-1)
    let newSentence2 = sentence.slice(wordBad+3,)
    console.log("true")
    console.log(newSentence1)
    console.log(newSentence2)
}
