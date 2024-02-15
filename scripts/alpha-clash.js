/*

function play() {
    //step-1: hide the home screen . to hide the screen add the class hidden to the home section

    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);


    //step-2: show the playground


    const playgrondSection=document.getElementById('play-ground');
    // console.log(playgrondSection.classList)
    playgrondSection.classList.remove('hidden');

}

*/
function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;
    // console.log('player pressed ',playerPressed);

    //stop the game if press "Esc"
    if(playerPressed === 'Escape'){
        gameOver();
    }



    console.log('player pressed', playerPressed);
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);
    //check match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        //update score

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        //step 2: increase the score by 1
        //step 3: show the updated score
        setTextElementValueById('current-score', updatedScore);




        // ---------------------------------------------------//

        /*
        //update score
        //step 1: get the currect score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);


        //step 2: increase the score by 1
        const newScore = currentScore + 1;
        //step 3: show the updated score
        currentScoreElement.innerText = newScore;

        */



        //start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {

        // -------------First way--------------------------//
        /*
         //step 1: get the currect life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //step -2: reduce the life count
        const newLife = currentLife - 1;
        //step -3: display the updated life count
        currentLifeElement.innerText = newLife;

        */


        // -----------------OR----------------------//

        //step 1: get the currect life number
        console.log('you missed. you lost a life.');

        const currentLife = getTextElementValueById('current-life');
        //step -2: reduce the life count
        //step -3: display the updated life count
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        //game end

        if (updatedLife === 0) {
            gameOver();

        }


    }
}

//capture keyboard keypress
document.addEventListener('keyup', handleKeyboardKeyupEvent)

function continueGame() {
    // step -1: genarate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet ',alphabet);
    //set rendomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}

function play() {

    //hide everything show only the playground

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    //step 1: get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    //step 1: set the final score
    setTextElementValueById('last-score',lastScore);

    //claear the last selected alphabet highlight

    const currentAlphabet=getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}