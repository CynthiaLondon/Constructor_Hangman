//`main.js` contains all the logic
var Word = require('./word.js');
var prompt = require('prompt');


console.log("Garden Herb Hangman!");
console.log("I am thinking of a garden herb. Guess a letter.");
console.log("-----------------------------");
prompt.start();



game = {
	wordBank: ['', 'parsley', 'thyme', 'marjoram', 'lemon balm', 'lavender', 'dill'],
 	wordsWon: 0,
 	guessesRemaining: 50,
 	currentWord: null,
 	
 	startGame: function (word) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 50;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("Sorry, that's not correct.");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("Yes, correct!");
 					if(self.currentWord.findWord()){
 						console.log("You guessed correctly!");
 						console.log("---------------------");
 						return;
 					}
 			}

 			console.log("Guesses left: " + self.guessesRemaining);
 			console.log("----------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("The game is over. Correct Word ", self.currentWord.target);
 			} else {
 				console.log(self.currentWord.wordRender());
 			}
 		});

 	}


};

game.startGame();