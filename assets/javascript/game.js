//letters to guess
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables for tracking wins, losses,guesses
var wins = 0;				// start count at 0 
var losses = 0; 			// start count at 0 
var guessesLeft = 9;		// guesses left at 9
var guessesSoFar = [];		// start array empty of guesses
var userGuess = null;		// start empty

// generate ramdom letter
var psychicLetter = letters[Math.floor(Math.random()*letters.length)];

// console.log to check
console.log(psychicLetter);

//when I hit a key, it will run the following function
document.onkeypress = function(event){
		// var userGuess = event.key;
		// taking in user guess
		// making sure capital letters are taking in
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 
		guessesSoFar.push(userGuess); //pushing user guess to guessesSoFar

		if (userGuess === psychicLetter){
			wins++;
			guessesLeft = 9;
			guessesSoFar = []; //empty this variable
			psychicLetter = letters[Math.floor(Math.random()*letters.length)];
			console.log(psychicLetter); // for troubleshooting purposes

		}
		else if (guessesLeft ==0 ) {
			losses++;
			guessesLeft = 9;
			guessesSoFar = []; // empty this variable
			psychicLetter = letters[Math.floor(Math.random()*letters.length)];
			console.log(psychicLetter);// for troubleshooting purposes
		}
		else if (userGuess !== psychicLetter){
			guessesLeft--;
		}
						
		// displaying progress to HTML
		var html = "<p><h1>The Psychic Game</h1></p>" +
		"<p><h4>Guess What letter I am thinking of</h4 ></p>" +
		"<p><h4>Wins: " + wins + "</h4></p>" +
		"<p><h4>Losses: " + losses + "</h4></p>" +
		"<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" +
		"<p><h4>Your Guesses So far: " + guessesSoFar + "</h4></p>" ;

		//place html into the div element with id #game
		document.querySelector("#game").innerHTML = html;
			
}

