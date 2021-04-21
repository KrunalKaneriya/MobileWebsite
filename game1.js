//Image 1
function execute() {
var randomNumber1 = Math.floor(Math.random()*3) + 1; //Randon Number Variable
var randomImage1 = "images/" + randomNumber1 + ".png"; //Setting Random Image
var image1 = document.querySelectorAll("img")[0]; //Selecting Image
image1.setAttribute("src",randomImage1); //Setting Random Image


//Image 2
var randomNumber2 = Math.floor(Math.random()*3) + 1; //Randon Number Variable
var randomImage2 = "images/" + randomNumber2 + ".png"; //Setting Random Image
var image2 = document.querySelectorAll("img")[1]; //Selecting Image
image2.setAttribute("src",randomImage2); //Setting Random Image

if ((randomNumber1 ==1 && randomNumber2 == 2)) {
    document.querySelector("h2").innerHTML = "Player 2 Wins..";
} else if (randomNumber1 == 1 && randomNumber2 == 3) {
    document.querySelector("h2").innerHTML = "Player 1 Wins..";
} else if (randomNumber1 == 2 && randomNumber2 == 1) {
    document.querySelector("h2").innerHTML = "Player 1 Wins..";
} else if (randomNumber1 == 2 && randomNumber2 == 3) {
    document.querySelector("h2").innerHTML = "Player 2 Wins..";
} else if (randomNumber1 == 3 && randomNumber2 == 1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins..";
} else if (randomNumber1 == 3 && randomNumber2 == 2) {
    document.querySelector("h2").innerHTML = "Player 1 Wins..";
} else {
    document.querySelector("h2").innerHTML = "There is Tie...";
}

}

execute();