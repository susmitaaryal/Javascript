// create a game where you start with any random game number. ask the user to keep guessing the game number until the user enters correct value.

let num = 5;
let usernum = prompt("enter a number");
console.log(usernum);

while(usernum != num){
    usernum=prompt("you entered wrong number.guess again:")

}
console.log("congratulations, you entered the right number");