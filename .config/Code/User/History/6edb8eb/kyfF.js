//Excercise 1: Users
    // Retrieve the div and console.log it
    let containerDiv = document.body.firstElementChild;
    console.log(containerDiv);

    // Change the name “Pete” to “Richard”.
    let peteLi = document.querySelector("li:nth-of-type(2)");
    peteLi.textContent = "Richard";

    // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
    let sarahLi = document.querySelectorAll("ul:nth-of-type(2) li:nth-of-type(2)")[0];
    sarahLi.parentNode.removeChild(sarahLi);

    // Change each first name of the two <ul>'s to your name. (Hint: use a loop)
    let ulLists = document.querySelectorAll("ul");
    for (let i = 0; i < ulLists.length; i++) {
        let firstLi = ulLists[i].querySelector("li");
        firstLi.textContent = "Simon";
    }