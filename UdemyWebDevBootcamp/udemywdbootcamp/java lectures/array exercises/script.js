var input = prompt("What would you like to do?");
var todos = ["Buy new turtle"];



while(input !== "quit"){
	//handle input
	if(input === "list"){
		listTodos();
	} else if(input === "new"){
	addTodo();
	}

	else if(input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}
console.log("OK, you quit the app");




function listTodos(){
	console.log("**********");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********");
}

function addTodo(){
	//ask new todo
	var newTodo = prompt("Enter new todo");
	//add to array
	todos.push(newTodo);
	console.log("new todo added");
	
	//ask for another input
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
		todos.splice(index, 1);
		console.log("deleted todo");
}