//Excercise 1: Users
    // Retrieve the div and console.log it
    var containerDiv = document.getElementById("container");
    console.log(containerDiv);

    // Change the name “Pete” to “Richard”.
    var peteLi = document.querySelector("li:nth-of-type(2)");
    peteLi.textContent = "Richard";

    // Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
    var sarahLi = document.querySelectorAll("ul:nth-of-type(2) li:nth-of-type(2)")[0];
    sarahLi.parentNode.removeChild(sarahLi);

    // Change each first name of the two <ul>'s to your name. (Hint: use a loop)
    var ulLists = document.querySelectorAll("ul");
    for (var i = 0; i < ulLists.length; i++) {
        var firstLi = ulLists[i].querySelector("li");
        firstLi.textContent = "Simon";
    }