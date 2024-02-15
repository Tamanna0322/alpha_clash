// function play(){
//     // step1: hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    // console.log('player pressed', playerPressed);

    // stop the game if press Esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(currentAlphabetElement.innerText);
    console.log(playerPressed, expectedAlphabet);


    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');


        const currentScore = getTextElementById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore);

        // -----------------------------------------------------
        // // update score
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2.increase the score by 1
        // const newScore = currentScore + 1;
    
        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('you miss the chance');
     
        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

       if(updatedLife === 0){
        // console.log('game over');
        gameOver();
       }

        // -------------------------------------------
        // // 1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2. reduce the life count
        // const newLife = currentLife - 1;

        // // 3. display the updated life
        // currentLifeElement.innerText = newLife;
    }
}

// capture key board key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundById(alphabet);


}


function play(){
    // hide everything show only the playground
    hideElementById('final-score');
    hideElementById('home-screen');
    showElementById('play-ground');

    // reset score and life
    setTextElementById('current-life',5);
    setTextElementById('current-score',0);

    continueGame();
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');

//    update final score
// 1.get the final score
const lastScore = getTextElementById('current-score');
console.log(lastScore);
setTextElementById('game-score', lastScore);

// clear the last selected bg highlight
const currentAlphabet = getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundById(currentAlphabet);
}