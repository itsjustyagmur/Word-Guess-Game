
var words = ["rachel", "phoebe", "chandler", "ross", "joey", "monica", "janice"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


var rachel = document.getElementById("rachel");
var phoebe = document.getElementById("phoebe");
var chandler = document.getElementById("chandler");
var ross = document.getElementById("ross");
var joey = document.getElementById("joey");
var monica = document.getElementById("monica");
var janice = document.getElementById("janice");


function aud() {
    if (randomWord === words[0]) {
        ross.pause();
        joey.pause();
        monica.pause();
        janice.pause();
        chandler.pause();
        phoebe.pause();
        rachel.play();
        document.getElementById("image").src = "./assets/images/rachel.gif";
    }
    else if (randomWord === words[1]) {
        ross.pause();
        joey.pause();
        monica.pause();
        janice.pause();
        chandler.pause();
        rachel.pause();
        phoebe.play();
        document.getElementById("image").src = "./assets/images/phoebe.gif";
    }

    else if (randomWord === words[2]) {
        ross.pause();
        joey.pause();
        monica.pause();
        janice.pause();
        phoebe.pause();
        rachel.pause();
        chandler.play();
        document.getElementById("image").src = "./assets/images/chandler.gif";
    }
else if (randomWord === words[3]) {
        joey.pause();
        monica.pause();
        janice.pause();
        chandler.pause();
        phoebe.pause();
        rachel.pause();
        ross.play();
        document.getElementById("image").src = "./assets/images/ross.gif";
    }
    else if (randomWord === words[4]) {
        monica.pause();
        janice.pause();
        chandler.pause();
        phoebe.pause();
        rachel.pause();
        ross.pause();
        joey.play();
        document.getElementById("image").src = "./assets/images/joey.gif";
    }
    else if (randomWord === words[5]) {
        joey.pause();
        janice.pause();
        chandler.pause();
        phoebe.pause();
        rachel.pause();
        ross.pause();
        monica.play();
        document.getElementById("image").src = "./assets/images/monica.gif";
    }
    else if (randomWord === words[6]) {
        joey.pause();
        monica.pause();
        chandler.pause();
        phoebe.pause();
        rachel.pause();
        ross.pause();
        janice.play();
        document.getElementById("image").src = "./assets/images/janice.gif";
    }
};

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/tryagain.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}