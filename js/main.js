console.log( "ARE YOU THERE AYDA?")
                                  /*----- constants -----*/
  const WORDS = ['wavelength', 'science', 'hypodermic', 'software', 'engineer', 'homework'] 
  const guessLimit = 5 //this will set # of total guess limit



                                  /*----- state variables -----*/
let maxWrongLimit = 5;
let wrongGuessRem = maxWrongLimit;

let results ={   
cG: 0, // # total correct player guesses count
wG: 0, // # total incorrect player guesses count}
}
let wordCount;//  = {} // how many letters left to guess 
let winner; 

                                  /*----- cached elements  -----*/


  const makeKeyboard = document.querySelector(".middle-section")
  const wordDiv = document.querySelector(".flex-container");
  const columnEls = [document.querySelectorAll('.column')]

  console.log ('TRIAL:', columnEls)
//listen for clicks:

    // √ -when player clicks for random word
    // -Word display
    // √ -keyboard display
    // -spaceman image
    // -when player guesses a letter
    // -when player whats to clear the Game or play again


                                  /*----- event listeners -----*/
//  Button: event listener for clicking the letters guessed,
// when players want to start over 
// √ when players click a letter

/// fronm geeks to geeks
function getKeyboard() {
  for (let i = 97; i <=122; i++) {
    const button =document.createElement('button');
    button.innerText = String.fromCharCode(i);
    makeKeyboard.appendChild(button);
    button.addEventListener('click', evt =>  handleClick(evt.target, String.fromCharCode(i)))
  }
}





function renderGuesses() {
  for (let key in guesses) { 
    pGuessEl= document.getElementById(`${key}-guess`);
      pGuessEl.innerHTML = `${guesses[key]}`;
  }
}



  
  function handleClick(button, letter) {

    if (splitWordGenerator.includes(letter)) {
      results.cG++
      button.style.backgroundColor = 'red';
      // columnEls.querySelectorAll('columns').innerText =letter
      document.createElement('button').innerHTML = letter
      console.log(letter);
      renderResults();
    
  
      // columnEls.style.backgroundColor ='black';
    } else {
      wrongGuessRem--
      console.log('NO');
            // results.cG =+ 1;
      wordDiv.style.backgroundColor ='red';
      wordDiv.style.backgroundColor ='white';


     }
}




                                 /*----- functions -----*/
init();

//   √ will initialize all states, => calls render();

  // √ random word function getRandomWord()
  // √ display the length of the word for the player
  // √ link keyboard to letters
  // Guessed letters are shown
  // display the number of chances remaining
  // keep track of number of wrong guesses
  // space man action if payer looses/wins
  // player is alerted if run out of guesses /losses game

  // GOOD TO GO **//
function init() {


  winner = {
  };

  splitWordGenerator = renderSplitWordGenerator()


  render();
}

function renderWord(){
  const word = splitWordGenerator;
  wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");
  console.log(word)
}

//GOOD TO GO **//

function renderGuesses() {
  for (let key in results) { 
    pGuessEl= document.getElementById(`${key}-guess`);
      pGuessEl.innerHTML = `${results[key]}`;
  }
}

function renderResults() {
} 


  // GOOD TO GO-ISH**//
function render() {
  getKeyboard();
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
  

  
