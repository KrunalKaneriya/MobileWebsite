//ButtonColors Array
var buttonColors = ["red", "blue", "green", "yellow"];

//GamePattern Array That Records Game Patterns
var gamePattern = [];

//Create an Array that stores the userChosenColor Pattern
var userClickedPattern = [];

//Create a boolean that only is false initially and another time it is set to true
var toggle = false;

//Create a var to keep track of level
var level = 0;

//Create a handler to record user clicks
$(".btn").click(function () { 
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  audio(userChosenColor); //Calls audio function to play sound of selected button
  animateButton(userChosenColor);
  checkAnswer(userClickedPattern.length-1); //Calls checkAnswer Function Everytime User Clicked to Check The Answer
});

//Create a handler to record keyboard Press
$(document).keydown(function (e) {  // This Function will be called one time only at start of game
  
  if(!toggle) {   //Condition used to call another function 
  $("#level-title").html("Level " + level);
  nextSequence();
  toggle = true;
  $(document).off("keydown"); //if toggle==true then stop listening keypresses
  }
});

//Function Next Sequence That Generates Random Number Between 1 To 3
function nextSequence() {
  userClickedPattern = []; //reset the pattern every time function is called
  level++; //Increment level everytime nextSequence is called
  $("#level-title").html("Level " + level); //Update the level every time nextSequence is called
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200); //Animate The Selected Button
  audio(randomChosenColor); //Call the function to play sound of randomChosenColor
}

//Function to Play Sound When a Button is Clicked
function audio(name) {
  //Create an audio object to play sound of button
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Function to Animate Button When User Clicked it

function animateButton(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout( function () {
    $("#" + currentColor).removeClass("pressed");
  }, 200);
}

//Game Checking Logic
function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
      if(userClickedPattern.length == gamePattern.length) {
        setTimeout(nextSequence,1000);
      }
  }
  else {
    audio("wrong");
    $("body").addClass("game-over");
    setTimeout(function (){
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").html("Game Over. Refresh To Restart.");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  toggle = false;
}