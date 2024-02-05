let sentence = "The movie is not that bad, I like it"
let wordNot = sentence.search("not")
let wordBad = sentence.search("bad")
if (wordBad > wordNot) {
    let newSentence1 = sentence.slice(0,wordNot-1)
    let newSentence2 = sentence.slice(wordBad+3,sentence.length)
    let fullSentence = (newSentence1+' good'+newSentence2)
    console.log(fullSentence)
} else {
console.log(sentence)
}
