

const AUDIO = new Audio('imgs/win-sound.wav')
                                  /*----- constants -----*/
const WORDS = ['sun', 'astronaut', 'space', 'universe', 'jupiter', 'wavelength', 'science', 'gravity', 'engineer', 'eclipse', 'cosmic', 'constillation', 'asteroid', 'constellation', 'atmosphere', 'galaxy', 'star'] 
const guessLimit = 5
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
// const playAgainBtn = document.getElementById('play-again-btn')
const shuffleWordsBtn = document.getElementById('shuffle')
const mainEl = document.querySelector('body')
const button =document.createElement('button');
button.classList.add('play-again-btn')
button.innerText = 'PLAY AGAIN'

// const gridContainer = document.querySelectorAll('div')


// const word = document.querySelector(".middle-section")



                                  /*----- event listeners -----*/
// playAgainBtn.addEventListener('click', handleShuffle)
shuffleWordsBtn.addEventListener('click', handleShuffle)

                                 /*----- functions -----*/
                                
init();
function init() {
  results ={ 
    cG: 0, // # total correct player guesses count  
    wG: 0,// # total incorrect player guesses count}
     }

  winner = null;
  splitWordGenerator = renderSplitWordGenerator()
  getKeyboard();
  renderWordDiv();
  render()
}

function handlePlayAgain() {
  handleShuffle()
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
  
  getKeyboard()

  const h1LimiReached = document.getElementById('word-limit')
  h1LimiReached.remove()


  // getKeyboard()
  render();
}


function render() {
  renderResults()
  renderControls()
}


function renderControls() {
  // playAgainBtn.style.visibility = winner ? "visible" : "hidden";

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



function getWinner() {
  const correctGs = document.querySelectorAll('.word-div:not(:empty)').length;    ////find reference
  if (correctGs === splitWordGenerator.length) {
    winner = true;
    console.log('Congratulations! You have won this round!');


  const img = document.createElement('img');
  img.src = 'imgs/astronaut.png';
  img.classList.add('astro')
  mainEl.appendChild(img)

  const mainSecEl = document.querySelectorAll('main')
  mainSecEl.forEach(div => div.remove())

  mainEl.appendChild(button);
  button.addEventListener('click', handleShuffle)


  AUDIO.currentTime = 0 
  AUDIO.play();
  render()

  } else {
    winner = false;
    console.log('Keep guessing!');
  }
  
  // renderControls();
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
    // const wordLimitReach = document.createElement(div)
    wordDiv.innerHTML = `<h1 id="word-limit">You have reached the limit for allowed guesses!</h1>`
    // Now the aliens have take our spaceman! Hurry, save them!
    const getPic1 = document.getElementById('pic5')
    getPic1.style.visibility = "visible"




  }    
  render()
}



function renderResults() {
  for (let key in results) { 
    pGuessEl= document.getElementById(`wG-guess`);
    pGuessEl.innerHTML = `${results.wG}` + ` out of ` + `${guessLimit}`;
  }
}

