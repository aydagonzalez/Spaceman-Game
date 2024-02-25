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
let maxWrong = 5
//   cGuess: 0, // # total correct player guesses count
//   wGuess: 0, // # total incorrect player guesses count
let results;
let wordCount;//  = {} // how many letters left to guess 
let winner; 
let splitWordGenerator;
  /*----- cached elements  -----*/
  const wordDiv = document.querySelector(".flex-container");
  const columnEls = [...document.querySelectorAll('.column')]
  console.log ('TRIAL:', columnEls)
//listen for clicks:

    // -when player clicks for random word
    // -Word display
    // -keyboard display
    // -spaceman image
    // -when player guesses a letter
    // -when player whats to clear the Game or play again


  /*----- event listeners -----*/

//   document.querySelector('.start-button')
//   .addEventListener('click', handleStartButton);

  // const buttons = document.querySelectorAll('.buttons')
  // let textarea = buttons.innerText

  // let text = buttons.innerText
  // console.log(text)
  // buttons.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     textarea
  //   })
  // })

function getKeyboard() {
  let buttons = 'abcdefghijklmnopqrstuvwxyz'
  let splitButtons = buttons.split('').map(letter =>
    `
    <button id="` + letter + ` onClick="handleGuess('`+ letter + `')">` + letter + `</button> `).join('');

   document.getElementById('keyboard').innerHTML =splitButtons ;
}

getKeyboard();

functionha

document.getElementById()

//   // const textArea = kButton.addEventListener('click', handlekButton);
  
//   kButton.forEach(btn => {
//   btn.addEventListener('click', () => {
//     textArea.value += btn.innerText
//   })
// })
  // function handlekButton(){
  //   kButton.innerText = 'a'
  // }
  // handlekButton()


  // function handleChoice(evt){
  //   //need a Guard (do nothing unless one of the three buttons were clicked)
  //     if (evt.target.tagName !== "BUTTON") return;
  //     // console.log(evt.target.tagName)
  //     //if player made c hoice
  //     results.p = evt.target.innerText.toLowerCase();
  //       //compute random choice for computer
  //     results.c = getRandomRPS();
  //     winner = getWinner();
  //     scores[winner] += 1;
  //     render();
  //   }



//  -Button: event listener for clicking the letters guessed,
// when players want to start over 
// when players click a letter

  /*----- functions -----*/
init();

//   √ will initialize all states, => calls render();

  // √ random word function getRandomWord()
  // √ display the length of the word for the player
  // link keyboard to letters
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

function renderWord(){
  const word = splitWordGenerator;
  wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");
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
  renderWord();
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


