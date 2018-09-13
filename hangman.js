var wrongGuesses = 0;
var rightGuesses = 0;

let words = "goal";
let letters = "abcdefghijklmnopqrstuvwxyz";

//array of words and letters    
let word= words.split("");
let letter = letters.split("");

//the keyboard click function
function assign(valueLetter) {
    console.log(valueLetter);
    var letter = valueLetter;
    
    if (letter === "g") {
        document.getElementById('statement').innerHTML = '<p>Correct letter!</p>';
        document.getElementById('0').value = "g";
        rightGuesses++;
        // console.log(rightGuesses);
    } else if (letter === "o"){
        document.getElementById('statement').innerHTML = '<p>Correct letter!</p>';
        document.getElementById('1').value = "o";
        rightGuesses++;
        // console.log(rightGuesses);
    } else if (letter === "a"){
        document.getElementById('statement').innerHTML = '<p>Correct letter!</p>';
        document.getElementById('2').value = "a";
        rightGuesses++;
        // console.log(rightGuesses);
    } else if (letter === "l"){
        document.getElementById('statement').innerHTML = '<p>Correct letter!</p>';
        document.getElementById('3').value = "l";
        rightGuesses = rightGuesses + 1;
    } else {
        wrongGuesses = wrongGuesses + 1;
        document.getElementById('statement').innerHTML = '<p>Wrong letter!</p>';
        // console.log(wrongGuesses);
        document.getElementById("timeLeft").stepDown(1);
    }
    
    //if user guest all correct letters
    if (rightGuesses === 4){
        document.getElementById('statement').innerHTML = '<p>Congrats you won! :D</p>';
        document.getElementById('keyboard').innerHTML = `<img src="https://media.giphy.com/media/4AZ7jvyD54AFO/giphy.gif" />`
    }

    // if user have 8 times wrong
    if (wrongGuesses === 8){
        document.getElementById('statement').innerHTML = '<p>Game over!</p>';
        document.getElementById('keyboard').innerHTML = `<img src="https://media.giphy.com/media/132bzOAtymSqc0/giphy.gif" />`
    }

    //everytime it is clicked, the keyboard will be changed to "keyboard-after"
    document.getElementById(letter).className = "keyboard-after";
    
};

//reset page function
function reset() {
  location.reload();  
};

//make buttons and return the letters on the keyboard button by loop
var text = "";

for ( var i = 0; i < letter.length; i++) {
        text += letter[i];
        document.getElementById('keyboard').innerHTML += '<button onclick="assign(this.id)" id="'+letter[i]+'" class="keyboard">' + letter[i] + '</button>';
        // or // buttons.innerHTML += '<button>' + letter[i] + '</button>';
    }

//make inputs by loop
for ( var i = 0; i < word.length; i++) {
        text += word[i];
        // idName = "input" + "-" + word[i];
        // console.log(idName);
        // console.log(i);
        // console.log(word[i]);
        document.getElementById('input-letters').innerHTML += ' <input value="" id="'+i+'" class="letter-container" disabled>';
    }
