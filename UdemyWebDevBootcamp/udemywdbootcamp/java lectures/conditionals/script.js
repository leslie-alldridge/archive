
var age = prompt("What is your age?");

if (age < 0) {
	alert("age cannot be less than 0");
}

else if(age == 21) {
	console.log("happy 21st birthday!!");
}

else if(age % 2 != 0){
	console.log("your age is odd")
}

else if(age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}
