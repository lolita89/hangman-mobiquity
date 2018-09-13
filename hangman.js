var wrongGuesses = 0;
var rightGuesses = 0;

let words = "goal";
let letters = "abcdefghijklmnopqrstuvwxyz";

//array of words and letters    
let word= words.split("");
let letter = letters.split("");

//the keyboard click function
function assign(value) {
    console.log(value);
    var letter = value;
    
    if (letter === "g") {
        alert("Correct letter!");
        document.getElementById('0').value = "g";
        rightGuesses = rightGuesses + 1;
        console.log(rightGuesses);
    } else if (letter === "o"){
        alert('correct letter!');
        document.getElementById('1').value = "o";
        rightGuesses = rightGuesses + 1;
        console.log(rightGuesses);
    } else if (letter === "a"){
        alert('correct letter!');
        document.getElementById('2').value = "a";
        rightGuesses = rightGuesses + 1;
        console.log(rightGuesses);
    } else if (letter === "l"){
        alert('correct letter!');
        document.getElementById('3').value = "l";
        rightGuesses = rightGuesses + 1;
    } else {
        wrongGuesses = wrongGuesses + 1;
        alert('wrong  letter!');
        console.log(wrongGuesses);
    }
    
    //if user guest all correct letters
    if (rightGuesses === 4){
  alert('Congrats! You won! :D');
}

    // if user have 9 times wrong
    if (wrongGuesses === 8){
  alert('GAME OVER!');
}

    //everytime it is clicked, the 'keyboard' will be changed to "keyboard-after"
    document.getElementById(letter).className = "keyboard-after";

    //will show the turns left


};

//reset page function
function reset() {
  location.reload();  
};

//make buttons and return the letters on the keyboard button by loop
var text = "";

for ( var i = 0; i < letter.length; i++) {
        text += letter[i];
        // console.log(letter[i]);
        document.getElementById('keyboard').innerHTML += '<button onclick="assign(this.id)" id="'+letter[i]+'" class="keyboard">' + letter[i] + '</button>';
        // or // buttons.innerHTML += '<button>' + letter[i] + '</button>';
    }

//make inputs by loop
for ( var i = 0; i < word.length; i++) {
        text += word[i];
        idName = "input" + "-" + word[i];
        console.log(idName);
        console.log(i);
        // console.log(word[i]);
        document.getElementById('input-letters').innerHTML += ' <input value="" id="'+i+'" class="letter-container" disabled>';
    }
