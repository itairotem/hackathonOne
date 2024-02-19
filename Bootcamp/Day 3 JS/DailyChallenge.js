for (let i=0; i<6; i++) {   
    console.log("* ".repeat(i+1));
}
let rows = 6;
let char = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    char += "* ";
  }
  char += "\n";
}
console.log(char);