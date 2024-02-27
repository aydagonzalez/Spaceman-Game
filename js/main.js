console.log( "ARE YOU THERE AYDA?")
                                  /*----- constants -----*/
const WORDS = ['wavelength', 'science', 'hypodermic', 'software', 'engineer', 'homework'] 
const guessLimit = 5 //this will set # of total guess limit
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

// const word = document.querySelector(".middle-section")



                                  /*----- event listeners -----*/
playAgainBtn.addEventListener('click', handlePlayAgain)
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
  // console.log('WORD:', wordDivs)
  wordDivs.forEach(div => div.remove())
  renderWordDiv()

     /// replace WordDiv
     //resetKeyboard
  render();

}


function render() {
  renderResults()
  renderControls()
}



function renderControls() {
  playAgainBtn.style.visibility = winner ? "visible" : "hidden";
}


function getWinner(button, letter) {

  //need to check for a winner in the broard state
  //returb null for no winner, retun YES from winner
  
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
      button.classList.add(letter)
      button.innerText = letter
      makeKeyboard.appendChild(button);
      button.addEventListener('click', evt => handleClick(evt.target, letter))
    }
  }
  )
}



function handleClick(button, letter) {
  winner = getWinner(button, letter) //**************//
  const word = splitWordGenerator; 
  if (splitWordGenerator.includes(letter)) {
   const letterEls= document.querySelectorAll(`#${letter}`)
   console.log(letterEls)
   letterEls.forEach((letterEl) => letterEl.textContent = letter)
    button.style.backgroundColor = 'green';
    correctGuess()

  } else {
    button.disabled = true
    button.style.backgroundColor = 'grey';
    button.style.opacity= '0.7';
    wrongGuess()
    console.log('NO');
  }
}


  
function correctGuess() {
    results.cG++
    button.disabled = true
    render()
}

function wrongGuess() {
  results.wG++;
  if (results.wG < guessLimit){
    render()
  } else {
    console.log ("You've reached your guesslimit");
    wordDiv.style.backgroundColor= "black";
    
  } 

}



function renderResults() {
  for (let key in results) { 
    pGuessEl= document.getElementById(`wG-guess`);
      pGuessEl.innerHTML = `${results.wG}` + ` out of ` + `${guessLimit}`;

  }
}
