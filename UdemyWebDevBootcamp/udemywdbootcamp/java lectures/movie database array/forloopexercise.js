var movies = [

{
	title: "Terminator",
	hasWatched: true,
	rating: 5
},
{
	title: "Sausage Party",
	hasWatched: true,
	rating: 2.5
},
{
	title: "Commando",
	hasWatched: false,
	rating: 3.5
}
]

movies.forEach(function(movie)
{	
	var result = "You have ";

	if(movie.hasWatched){
		result += "watched ";
	}

	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
})


