

const AUDIO = new Audio('imgs/win-sound.wav')
                                  /*----- constants -----*/
const WORDS = ['wavelength', 'science', 'hypodermic', 'software', 'engineer', 'homework'] 
const guessLimit = 3 
const ALPH_LOOKUP = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];



                                  /*----- state variables -----*/
let results;
let winner; 
let splitWordGenerator;
// let word = splitWordGenerator; 
                                  /*----- cached elements  -----*/

const wordDiv = document.querySelector(".flex-container");
const creatingWordDiv = document.createElement('div');
const columnEls = [document.querySelectorAll('.column')]
const columnEl = document.querySelector('.flex-container'); // Assuming there's only one column element
const makeKeyboard = document.querySelector(".middle-section")
const button =document.createElement('button');
const playAgainBtn = document.getElementById('play-again-button')
const shuffleWordsBtn = document.getElementById('shuffle')
// const gridContainer = document.querySelectorAll('div')


// const word = document.querySelector(".middle-section")



                                  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', handleShuffle)
shuffleWordsBtn.addEventListener('click', handleShuffle)

                                 /*----- functions -----*/
                                
init();
function init() {
  results ={ 
    cG: 1, // # total correct player guesses count  
    wG: 0,// # total incorrect player guesses count}
     }

  winner = null;
  splitWordGenerator = renderSplitWordGenerator()
  getKeyboard();
  renderWordDiv();
  render()
}

function handlePlayAgain() {
  render()
}

function handleShuffle() {
  results ={ 
    cG: 0, // # total correct player guesses count  
    wG: 0,// # total incorrect player guesses count}
     }
  winner = null;
  splitWordGenerator = renderSplitWordGenerator()
  const wordDivs = document.querySelectorAll('.word-div')
  wordDivs.forEach(div => div.remove())
  renderWordDiv()
  const keyboardBtn = document.querySelectorAll('.keyboard-btn')
  keyboardBtn.forEach(btn => btn.remove())
  // button.style.backgroundColor = 'white';
  // button.style.opacity= '1';
  getKeyboard()

  render();

}


function render() {
  renderResults()
  renderControls()
  
}


function renderControls() {
  playAgainBtn.style.visibility = winner ? "visible" : "hidden";

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

function renderWordDiv() {
  const word = splitWordGenerator;
  for (const item of word) {
    const creatingWordDiv = document.createElement('div');
    creatingWordDiv.classList.add('word-div', 'flex-item', 'item-1'); // Add a meaningful class name here
    creatingWordDiv.setAttribute('id', item);
    columnEl.appendChild(creatingWordDiv);
    console.log(item);
  }
}


  // fronm geeks to geeks
  function getKeyboard() {
    ALPH_LOOKUP.forEach(letter => {
    for (let i=0; i<1; i++) {
      const button = document.createElement('button');
      button.classList.add(letter, 'keyboard-btn')
      button.innerText = letter
      makeKeyboard.appendChild(button);
      button.addEventListener('click', evt => handleClick(evt.target, letter))
    }
  }
  )
}



function handleClick(button, letter) {
  // winner = getWinner(button, letter) //**************//
  const word = splitWordGenerator; 
  if (splitWordGenerator.includes(letter)) {

   const letterEls= document.querySelectorAll(`#${letter}`)
   console.log(letterEls)
   letterEls.forEach((letterEl) => letterEl.textContent = letter)
    button.style.backgroundColor = 'green';
    getWinner(button, letter)
    correctGuess()

  } else {
    button.disabled = true
    button.style.backgroundColor = 'grey';
    button.style.opacity= '0.7';
    wrongGuess()
    console.log('NO');
  }
}





// Set the src attribute to the path of the image in the other folder
 // Update the path accordingly

// Append the img element to the document's body or any specific element within the body
; // Append to body


function getWinner() {
  const correctGs = document.querySelectorAll('.word-div:not(:empty)').length;    ////find reference
  if (correctGs === splitWordGenerator.length) {
    winner = true;
    console.log('Congratulations! You have won this round!');


const mainEl = document.querySelector('body')
const img = document.createElement('img');
img.src = 'imgs/astronaut.png';
img.classList.add('astro')
mainEl.appendChild(img)


mainEl.style.justifySelf = 'center'
const mainSecEl = document.querySelectorAll('main')
mainSecEl.forEach(div => div.remove())

AUDIO.currentTime = 0 
AUDIO.play();
playAgainBtn.style.visibility = winner ? "visible" : "hidden";

render()

  } else {
    winner = false;
    console.log('Keep guessing!');
  }
  
  renderControls();
}



function correctGuess() {
  results.cG++
  button.disabled = true
  render()
}

function wrongGuess() {
  results.wG++;
  if (results.wG < guessLimit){

  } else {
    console.log ("You've reached your guesslimit");
    wordDiv.style.backgroundColor= "black";

    // gridContainer.style.backgroundColor= "red";
  }    
  render()
}



function renderResults() {
  for (let key in results) { 
    pGuessEl= document.getElementById(`wG-guess`);
      pGuessEl.innerHTML = `${results.wG}` + ` out of ` + `${guessLimit}`;

  }
}

