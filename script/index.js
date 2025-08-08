const displayLetter = document.getElementById('display-letter');
let letter = '';

document.addEventListener('keyup', (evt) => {

    const currentLetter = evt.key;
    if (currentLetter === letter) {
        console.log("correct letter click");

        // CHANGES THE COLOR button from kye board
        document.getElementById(letter).classList.remove('bg-orange-400', 'text-white');

        // updating score
        let score = updateValue('score-value');

        let newScore = score + 1;
        document.getElementById('score-value').innerText = newScore;

    } else {
        console.log("wrong letter.");
        // CHANGES THE COLOR button from kye board
        document.getElementById(letter).classList.remove('bg-orange-400', 'text-white');

        // updating life
        let life = updateValue('life-value');

        let newLife = life - 1;
        document.getElementById('life-value').innerText = newLife;

        // game over
        if (newLife == 0) {
            hiddenElement('playground');
            showElement('score-board');
        }

    }
    play();
});

function gameOver() {

    console.log('game over')
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
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    const letterArr = letter.split('');

    let randNumber = Math.round(Math.random() * 25);
    let alphabet = letterArr[randNumber];

    // alphabet background color
    document.getElementById(alphabet).classList.add('bg-orange-400', 'text-white');

    return alphabet;
}

