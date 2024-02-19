let color;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let color_blocks = document.querySelectorAll("#sidebar > *");
let fill_blocks = document.querySelectorAll("#main > *");
let clear_button = document.getElementsByTagName("button")[0];

clear_button.addEventListener("click", function(){
    for (let fill_block of fill_blocks){
        fill_block.style.backgroundColor = "white";
    }
});

const gridContainer = document.getElementById('gridContainer');
let boardDivsCount = 25*60
for (let i = 0; i < boardDivsCount; i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.setAttribute('class', 'grid div')
  }


  gridContainer.addEventListener("mousedown", function(){
    mousedown = true;
})

gridContainer.addEventListener("mouseup", function(){
    mousedown = false;
})


for (let color_block of color_blocks){
    color_block.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

check()
function check(){
    console.log("hi");
    for (let fill_block of fill_blocks){

        fill_block.addEventListener("mousedown", function(event){
            if (color){
    
                event.target.style.backgroundColor = color;
                console.log(event.target);}
        });
        fill_block.addEventListener("mouseover", function(event){
            if (mousedown && color != null) {event.target.style.backgroundColor = color;
    }});
    }

}
// for (let fill_block of fill_blocks){

//     fill_block.addEventListener("mousedown", function(event){
//         if (color){

//             event.target.style.backgroundColor = color;
//             console.log(event.target);}
//     });
//     fill_block.addEventListener("mouseover", function(event){
//         if (mousedown && color != null) {event.target.style.backgroundColor = color;
// }});
// }



