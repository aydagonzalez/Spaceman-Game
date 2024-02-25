console.log( "ARE YOU THERE AYDA?")
  /*----- constants -----*/
    const WORDS = ['wavelength', 'science', 'hypodermic', 'software', 'engineer', 'homework'] 
    // -words to randomize with (fisher yates shuffle -- will shuffle array)
    const ALPH_LOOKUP = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];

   const guessLimit = 5 //this will set # of total guess limit

// **Ayda: look up how to accept user input in the browser**//
// -alphabet as an array -> use forEach method


  /*----- state variables -----*/
let board;
let board2;
let guesses;
//   cGuess: 0, // # total correct player guesses count
//   wGuess: 0, // # total incorrect player guesses count
let results;


let wordCount;
//  = {} // how many letters left to guess 
// //tG =  set# // number to total guesses allowed

let winner; 
// = {
//   playerGuess: 
// } //starts at null, 
          // (pG === tG && wordCount > 0) player looses if pG === tG total guesses allowed, but has letters left to identity from the wordCunt
          //player wins if pG guesses word  (pG wins if wordCount === 0)

  /*----- cached elements  -----*/
  const columnEls = [...document.querySelectorAll('.column')]
  console.log ('TRIAL:', columnEls)
//listen for clicks:

    // -when player clicks for random word
    // -Word display
    // -keyboard display
    // -spaceman image
    // -when player guesses a letter
    // -when player whats to clear the Game or play again
let splitWordGenerator;

  /*----- event listeners -----*/
  document.querySelector('.start-button')
  .addEventListener('click', handleStartButton);
  

//  -Button: event listener for clicking the letters guessed,
// when players want to start over 
// when players click a letter

  /*----- functions -----*/
init();

//   √ will initialize all states, => calls render();

  // random word function getRandomWord()
  // display the length of the word for the player
  // Guessed letters are shown
  // display the number of chances remaining
  // keep track of number of wrong guesses
  // space man action if payer looses/wins
  // player is alerted if run out of guesses /losses game

  // GOOD TO GO **//
function init() {

  board = 
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10']
    board2 = 
    {c1: '', c2: '', c3: '', c4: '', c5: '', c6: '', c7: '', c8: '', c9: '', c10: ''
    }
  guesses = {
    cG: 2, //player guesses
    wG: 0 // wrong guesses
  };
  results ={
    cG: '', //player guesses
    wG: ''
  };

  winner = {
    //THIS IS EMPTY--LOOKOVER**//
  };

  splitWordGenerator = renderSplitWordGenerator()

  

  render();
}



function handleStartButton(evt){
  //need a Guard (do nothing unless one of the three buttons were clicked)
    if (evt.target.tagName !== "start-button") return;
    // console.log(evt.target.tagName);
    render();
  }

//GOOD TO GO **//
function renderGuesses() {
  for (let key in guesses) { 
    pGuessEl= document.getElementById(`${key}-guess`);
      pGuessEl.innerHTML = `${guesses[key]}`;
  }
}

function renderResults() {
} 


  // GOOD TO GO-ISH**//
function render() {
  renderGuesses();
  renderResults();
  renderSplitWordGenerator();

}


// GOOD TO GO //
  function renderSplitWordGenerator() {
  for (let i = WORDS.length -1; i > 0; i--) {  //sets up loop that iterates over array
    let randomIdx = Math.floor(Math.random() * (i + 1)); //save the current item to the temp vairable
    let temp = WORDS[i];
    WORDS[i] = WORDS[randomIdx];
    WORDS[randomIdx] = temp; 
  }
  let shuffledWord = WORDS.slice(0, 1);
  let shuffledWordArr = shuffledWord[0];
  let splitWord = shuffledWordArr.split(''); {
    return splitWord
    // console.log('SPLITWORD w;', splitWord)
  };
}



function columnLoop2() {
  let board = 
['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10']
  for (let i = 0; i <= board.length -1;  i++) {
    return `${board[i]}` ;
}
}
  columnLoop2()

//startrs loop for words
  function columnLoop() {
    // let board = splitWordGenerator
    for (let i = 0; i <= splitWordGenerator.length -1;  i++) {
      return `${splitWordGenerator[i]}` ;
  }
  }
    columnLoop(splitWordGenerator)
    // console.log(splitWordGenerator)
  

  


  
function a () {
for (let key in board) {
document.getElementById(`${key}`);
letterDiv.textContent = `${board[key]}`;
}
}



const REAL= {
  words : splitWordGenerator,
  board3 : ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'],
  eachLetter: '',



 
  init: function(newWordonDiv) {
    this.wordOnDiv = newWordonDiv
  },

  loopWord: function(word) {
    this.words.forEach(word => {
      return word
    });
    this.wordOnDiv(word, this.words);
    }

};

REAL.init(function(newWordonDiv, board3) {
  console.log(newWordonDiv);
  console.log('HEllo CRAZY ' + board3)
})

REAL.loopWord(word =>
  console.log('TRIAL',word))



for (let key in REAL) {
const letterDiv3 = document.getElementById(`${REAL.board3[0]}`);
letterDiv3.textContent = `${REAL.words[0]}`;

}

console.log('hello:')






const keyboardDiv = document.querySelector(".middle-section")

for (let i = 97; i <=122; i++) {
  const button =document.createElement('button');
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button)
  // console.log(String.fromCharCode(i))
}



const wordDiv = document.querySelector(".flex-container");
  const word = splitWordGenerator;
  wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");


// }
  console.log('Hell1:', word)
  console.log(String.fromCharCode('Hell2:',REAL.board3))

  console.log(String.fromCharCode('Hell2:', ))