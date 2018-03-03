
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "l", "j", "k", "i", "m", "n", "o", "q", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessCount = 9;
var userGuesses = [];
var computerGuess = [];

window.onload = function() {
    var compGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    computerGuess.push(compGuessed);
    console.log(computerGuess[0]);
};

document.onkeyup = function(event) {
        var userGuessed = event.key;
        userGuesses.push(userGuessed);
        console.log(computerGuess[0]);

        if ((userGuessed === computerGuess[0]) && (guessCount > 0)) {
            wins++;
            guessCount = 9;
            userGuesses.length = 0;
            computerGuess.length = 0;
            // var compGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            compGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            computerGuess.push(compGuessed);
            console.log(computerGuess[0]);
        }

        else if ((userGuessed !== computerGuess[0]) && (guessCount > 0)) {
            guessesCount = guessCount--;
        }

        else {
            losses++;
            guessCount = 9;
            userGuesses.length = 0;
            computerGuess.length = 0;
            // var compGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            compGuessed = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            computerGuess.push(compGuessed);
            console.log(computerGuess[0]);
        }

        var html = "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessCount + "</p>" +
            "<p>Your Guesses so far: " + userGuesses + "</p>";
        document.querySelector("#game").innerHTML = html;

    }
