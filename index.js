var randomNumber1 = Math.floor((Math.random() * 6) + 1);//Random number between 1-6.
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";//Using concactonation and random number to change src attribute of images.
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);//Changing the src attribute using randomImage variable.
document.querySelector(".img2").setAttribute("src", randomImage2);

//changing heading based on which dice rolls higher.
if(randomNumber1 > randomNumber2){//if player 1 wins.
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(randomNumber2 > randomNumber1){///If player 2 wins.
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if(randomNumber1 === randomNumber2){//If it's a draw.
  document.querySelector("h1").innerHTML = "It's a draw!";
}
