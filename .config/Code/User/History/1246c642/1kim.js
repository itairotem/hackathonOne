//Exercise 1 : Change The Article
const article = document.body.firstElementChild
const h1 = article.firstElementChild
console.log(h1);

//2
const article2= document.querySelector('article')
article2.lastElementChild.remove()
console.log(article2);

//3
const h2 = article.children[1]
h2.onclick = function (){
    console.log(correct);
};