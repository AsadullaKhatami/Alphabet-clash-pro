const displayLetter = document.getElementById('display-letter');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const letterArr = alphabet.split('');
let letter = '';
let newScore = 0;
let newLife = 3;

document.addEventListener('keyup', (evt) => {

    const currentLetter = evt.key.toLowerCase();

    // key track what heppend 

    if (currentLetter === letter) {

        // CHANGES THE COLOR button from kye board
        document.getElementById(letter).classList.remove('bg-orange-400', 'text-white');

        // updating score
        let score = updateValue('score-value');

        newScore = score + 1;
        document.getElementById('score-value').innerText = newScore;

    } else {

        // CHANGES THE COLOR button from kye board
        document.getElementById(letter).classList.remove('bg-orange-400', 'text-white');

        // updating life
        let life = updateValue('life-value');

        newLife = life - 1;
        document.getElementById('life-value').innerText = newLife;

        // game over
        if (newLife <= 0) {
            gameOver();
            return 0;
        }else if(currentLetter === 'escape'){
            gameOver();
            return 0;
        }else if(currentLetter === 'tab' || currentLetter === 'capslock' || currentLetter === '' || currentLetter === 'alt' || currentLetter === 'shift' || currentLetter === 'backspace' || (currentLetter >= 0 && currentLetter <= 9)) {
            alert('your life is gone. Please enter escape for exit from game');
        }

        

    }

    play();
});

function playAgain() {
    // reset score and life
    newLife = 3;
    newScore = 0;
    document.getElementById('score-value').innerText = newScore;
    document.getElementById('life-value').innerText = newLife;

    showElement('playground');
    hiddenElement('play-now');
    hiddenElement('score-board');
    letter = randomAlphabet();
    displayLetter.innerText = letter;

}

function gameOver() {
    hiddenElement('playground');
    showElement('score-board');

    // show score on score board
    const showOnScoreBoard = document.getElementById('show-score-on-scoreboard');
    showOnScoreBoard.innerText = newScore;


    console.log('game over');
    console.log(newScore);

    return 0;
}

function updateValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;
}

function play() {
    showElement('playground');
    hiddenElement('play-now');
    hiddenElement('score-board');
    letter = randomAlphabet();
    displayLetter.innerText = letter;
}

function hiddenElement(hiddenId) {
    const hidden = document.getElementById(hiddenId);
    hidden.classList.add('hidden');
}

function showElement(showId) {
    const show = document.getElementById(showId);
    show.classList.remove('hidden');
}

function randomAlphabet() {

    let randNumber = Math.round(Math.random() * 25);
    let alphabet = letterArr[randNumber];

    // alphabet background color
    document.getElementById(alphabet).classList.add('bg-orange-400', 'text-white');

    return alphabet;
}

