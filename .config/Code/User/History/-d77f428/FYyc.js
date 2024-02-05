let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    sentence.slice(wordNot, (wordBad+2))
    console.log("true")
    console.log(sentence)
}
console.log(sentence)