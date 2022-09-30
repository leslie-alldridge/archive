

var p1Button = document.querySelector("#p1Button");
var p2Button = document.getElementById("p2Button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("resetButton");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1Score ++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score ++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;
}
});

// reset button - chages scores back to 0, removes green text and sets game over to false.


function reset(){

	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}


resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
	
});


