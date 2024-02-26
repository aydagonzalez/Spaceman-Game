console.log( "ARE YOU THERE AYDA?")
                                  /*----- constants -----*/
const WORDS = ['wavelength', 'science', 'hypodermic', 'software', 'engineer', 'homework'] 
const guessLimit = 5 //this will set # of total guess limit
const ALPH_LOOKUP = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];



                                  /*----- state variables -----*/
let results;
let winner; 
                                  /*----- cached elements  -----*/

const wordDiv = document.querySelector(".flex-container");
const columnEls = [document.querySelectorAll('.column')]
const makeKeyboard = document.querySelector(".middle-section")
const button =document.createElement('button');
// const word = document.querySelector(".middle-section")



                                  /*----- event listeners -----*/

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

  render()
}


function render() {
  renderWordDiv();
  renderWord();
  renderResults()
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




// function renderWordDiv() {
//   const word = splitWordGenerator; 
  // wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");
  // console.log('WORD',word)
// }


function renderWordDiv() {
  const word = splitWordGenerator; // Assuming splitWordGenerator is a function that returns an array of letters
  word.forEach((letter, index) => {
    const creatingWordDiv = document.createElement('div');
    creatingWordDiv.classList.add('word-div'); // Add a meaningful class name here
    creatingWordDiv.setAttribute('id', index)
    creatingWordDiv.innerText = letter;
    const columnEl = document.querySelector('.flex-container'); // Assuming there's only one column element
    columnEl.appendChild(creatingWordDiv);
  });
}


function renderWord(button, letter){
    // button.style.backgroundColor = 'black';
  // wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");
  // const word = splitWordGenerator;
  // if X happened then = >     // wordDiv.innerHTML = word.map((letter) => letter)  
  // wordDiv.innerHTML = word.map(() => `<div class="flex-item column"></div>`).join("");
  // wordDiv.innerHTML = word.map((word) =>  word).join("")
  // console.log(word)
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
  if (splitWordGenerator.includes(letter)) {
    button.style.backgroundColor = 'green';
    correctGuess()
    console.log (letter)
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
    // results = renderResults();
    render()
  
}


function wrongGuess() {
  results.wG++;
  if (results.wG < guessLimit){
    render()
  } else {
    console.log ("You'vereached your guesslimit");
    wordDiv.style.backgroundColor= "black";
    
  } 

}


// function youlose(){
//   const img = document.getElementById('you-lost');   
//   img.style.visibility = "visible";

// }



function renderResults() {
  for (let key in results) { 
    pGuessEl= document.getElementById(`${key}-guess`);
      pGuessEl.innerHTML = `${results[key]}`;

  }
}
