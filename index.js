var inquirer = require("inquirer");
var Word = require("./Word.js");
var Letters = require("./Letters");
var guesses = 10;
var points = 0;
var wordsToGuess = ["Dysfunctional", "Slacker", "Einstein", "Caribou Lou", "Fragile", "Hood Go Crazy"];
var chosenWord;
var randomWord;

function startGame() {
    console.log("Its time to Guess some songs! ill give you a hint, Tech N9ne");
    if (guesses > 0 && points < 5) {
        console.log(chosenWord.display());
        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!",
                 function (str) {
                    if (str.length != 1) return false;
                    console.log(this);
                }
            }
        ]
        )};
}

function chooseRandomWord() {
    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]
    chosenWord = new Word(randomWord);
}

function loseGame() {
    console.log("Nice Try! You Lose..");
    inquirer.prompt([
        {
            name: "nope.",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
};

function winGame() {

    console.log("you win!");
     function Point() {
         for (i==0; i < points.length; i++) {
             points = points.length[i];
         }
        if (err) {
            console.log('something went wrong.');
            console.log(err);
            return;

        }
        console.log(data);
    };
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (startGame) {
            if (startGame) {
}
            else {
                console.log("bye!");
                process.end();
            }
        })

}


startGame();
chooseRandomWord();
guessWord();