
var button = document.querySelector("button1");
var isPurple = false;

button1.addEventListener("click", function(){

	// if white,
	// make it purple
	// else, make it white
	if(isPurple){
	document.body.style.background = "white";
	isPurple = false;
} else {
	document.body.style.background = "purple";
	isPurple = true;
}

// });


// // Using CSS and 'toggle'

// button1.addEventListener("click", function(){
// 	document.body.classList.toggle("purple");

// });