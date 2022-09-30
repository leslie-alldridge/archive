// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("Yay we made it");

//new code below using indexOf to check entire input for 'yeah' or 'yes'

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay we made it");