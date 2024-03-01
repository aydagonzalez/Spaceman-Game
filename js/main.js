

const AUDIO = new Audio('imgs/win-sound.wav')
const correctG = new Audio('imgs/correct-answer.wav')
const wrongG = new Audio('imgs/wrong-answer.wav')
const shuffleAudio = new Audio('imgs/retro-game-over.wav')
/*----- constants -----*/
const WORDS = ['sun', 'planet', 'mercury', 'saturn', 'stardust', 'plasma', 'atoms', 'earth', 'universe', 'neutron', 'alien', 'astronaut', 'space', 'universe', 'jupiter', 'wavelength', 'science', 'gravity', 'world', 'eclipse', 'cosmic', 'asteroid', 'constellation', 'atmosphere', 'galaxy', 'star']
const guessLimit = 7
const ALPH_LOOKUP = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

/*----- state variables -----*/
let results;
let winner;
let splitWordGenerator;
/*----- cached elements  -----*/

const wordDiv = document.querySelector(".flex-container");
const makeKeyboard = document.querySelector(".middle-section")
const shuffleWordsBtn = document.getElementById('shuffle')
const mainEl = document.querySelector('.flex-container')
const img = document.createElement('img');
const creatingWordDiv = document.createElement('div');
const columnEls = [document.querySelectorAll('.column')]
const columnEl = document.querySelector('.flex-container');
const playAgainBtn = document.querySelector('.play-again-btn')
const pGuessEl = document.getElementById(`wG-guess`)
const getAstroPic = document.querySelectorAll(".astronaut")


/*----- event listeners -----*/
playAgainBtn.addEventListener('click', handlePlayAgain)
shuffleWordsBtn.addEventListener('click', handleShuffle)

/*----- functions -----*/
init();

function init() {
  results = {
    cG: 0,
    wG: 0,
  }
  winner = null;
  splitWordGenerator = renderSplitWordGenerator()
  playAgainBtn.style.visibility = 'hidden'
  getKeyboard();
  renderWordDiv();
  render()
}

function handlePlayAgain() {
  handleShuffle()
  mainEl.querySelector('.astro').remove()
  playAgainBtn.style.visibility = 'hidden'
  shuffleWordsBtn.style.visibility = "visible"

  if(getAstroPic) {
    getAstroPic.forEach(ast => ast.style.visibility = "hidden")
  }

}

function handleShuffle() {
  results = {
    cG: 0,
    wG: 0,
  }
  winner = null;
  splitWordGenerator = renderSplitWordGenerator()

  shuffleAudio.currentTime = 0
  shuffleAudio.play();
  document.querySelector('#shuffle').style.backgroundColor = ""

  const wordDivs = document.querySelectorAll('.word-div')
  wordDivs.forEach(div => div.remove())
  renderWordDiv()

  const keyboardBtn = document.querySelectorAll('.keyboard-btn')
  keyboardBtn.forEach(btn => btn.remove())

  getKeyboard()

  getAstroPic.forEach(ast => ast.style.visibility = "hidden")

  const h1LimitReached = document.getElementById('letter-limit')
  if (h1LimitReached) {
    h1LimitReached.style.display = 'none'
  }
  render();
}

function render() {
  renderResults()
}


function renderSplitWordGenerator() {
  for (let i = WORDS.length - 1; i > 0; i--) { 
    let randomIdx = Math.floor(Math.random() * (i + 1));
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
    for (let i = 0; i < 1; i++) {
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
    const letterEls = document.querySelectorAll(`#${letter}`)
    console.log(letterEls)
    letterEls.forEach((letterEl) => letterEl.textContent = letter)
    button.style.backgroundColor = 'green';
    getWinner(button, letter)
    correctGuess()
  } else {
    button.disabled = true
    button.style.backgroundColor = 'grey';
    button.style.opacity = '0.7';
    wrongGuess()
    console.log('NO');
  }
}


function getWinner() {
  const correctGs = document.querySelectorAll('.word-div:not(:empty)').length;    //find reference
  if (correctGs === splitWordGenerator.length) {
    winner = true;
    console.log('Congratulations! You have won this round!');

    playAgainBtn.style.visibility = 'visible'

    img.src = 'imgs/astronaut.png';
    img.classList.add('astro')
    mainEl.appendChild(img)

    const mainSecEl = document.querySelectorAll('main')
    const keyboardBtn = document.querySelectorAll('.keyboard-btn')
    keyboardBtn.forEach(btn => {
      btn.style.visibility = "hidden";
    });

    shuffleWordsBtn.style.visibility = "hidden"

    AUDIO.currentTime = 0
    AUDIO.play();
    render()

  } else {
    winner = false;
    console.log('Keep guessing!');
  }
}

function correctGuess() {
  results.cG++
  correctG.currentTime = 0
  correctG.play();
  // button.disabled = true
  render()
}

function wrongGuess() {
  results.wG++;
  wrongG.currentTime = 0
  wrongG.play();
  for (let key in results) {
    const getPic = document.getElementById(`pic${results.wG}`)
    getPic.style.visibility = "visible";
    
    if (results.wG < guessLimit) {
    } else {
      console.log("You've reached your guesslimit");
      wordDiv.innerHTML = `<h1 id="letter-limit">You have reached </br> the limit for guesses </br>allowed!
      <br><br> The word was    <br> <span style="color:purple"> ${splitWordGenerator.join("")}.</span>  </h1>`
      document.querySelector('#shuffle').style.backgroundColor = '#DA70D6'
    }
  }
  render()
}

function renderResults() {
  for (let key in results) {
    pGuessEl.innerHTML = `${results.wG}` + ` out of ` + `${guessLimit}`;
  }
}