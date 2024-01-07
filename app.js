const heroList = heroes
const answer = getRandomHero();
let userGuess = null;
var row = 0;
var attemptNumber = 1;
let factionCorrect = false;
let classCorrect = false;
let raceCorrect = false;
let genderCorrect = false;
let appearanceCorrect = false;
let winner = false;
// let wins = winCounter();

console.log(answer);

// Functions for drawing the actual grid and box structure for the game
function drawBoxes(container, row, col) {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`; 

    container.appendChild(box);
    return box;
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 6; j++) {
            drawBoxes(grid,i,j);
        }
    }

    container.appendChild(grid);
}

// Function for randomly selecting a hero object as the answer
function getRandomHero() {
    const randomHeroIndex = Math.floor(Math.random() * heroList.length);
    return heroList[randomHeroIndex];
}

// Import the user input in the text box
function getInput() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            const userEntry = document.getElementById('answerBox');
            getAttempt(userEntry.value);
            userEntry.value='';
        }
    }
}

// Handle and clean the user input and call the update grid with the user's guess
function getAttempt(userGuess) {
    let updatedGuess = userGuess.replaceAll(/[^a-zA-Z]/gi, "");
    updatedGuess = updatedGuess.toLowerCase();
    for (let i = 0; i < heroList.length; i++) {
        let parsedAnswer = heroList[i].name.replaceAll(/[^a-zA-Z]/gi, "");
        if (updatedGuess === parsedAnswer.toLowerCase()) {
            this.userGuess = heroList[i]
            const userGuessObj = heroList[i]
            updateGrid(userGuessObj);
        }
    }
}

// Take the user's input, compare it to the answer object, and display correct, partial, or wrong to the user
function updateGrid(userInput) {
    const animation_duration = 500; //ms
    
    for (let i = 0; i < 6; i++) {
        const box = document.getElementById(`box${row}${i}`)
        setTimeout(() => {
        if (i === 0) {
                const icon = document.createElement('img');
                icon.src = userInput.icon;
                box.appendChild(icon);
            }

            if (i === 1) {
                const userFaction = userInput.faction;
                factionCheck(userFaction, box);
            }

            if (i === 2) {
                const userClass = userInput.class;
                classCheck(userClass, box);
            }

            if (i === 3) {
                const userSpecies = userInput.species;
                speciesCheck(userSpecies, box);
            }

            if (i === 4) {
                const userGender = userInput.gender;
                genderCheck(userGender, box);
            }

            if ( i === 5) {
                const userFirstSeen = userInput.firstSeen;
                firstSeenCheck(userFirstSeen, box);
            }
            winnerCheck();
            loserCheck();
        }, ((i + 1) * animation_duration) / 2); 
            box.classList.add('animation');
            box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
    row++;
    attemptNumber++;  
    // hints(attemptNumber);
}

// Check the faction of the user guess object and compare to the answer object to see if they match        
function factionCheck(userFaction, box) {
    let factionString = userFaction;
    let factionArray = factionString.split(/\s*,\s*/);
    for (let i = 0; i <= factionArray.length; i++) {
        if (userFaction === answer.faction) {
            factionCorrect = true;
            box.classList.add('right');
            box.textContent = userFaction;
        }
        else if (answer.faction.includes(factionArray[i])) {
            box.classList.add('partial')
            box.textContent = userFaction;
        }
        else {
            box.textContent = userFaction;
        }
    }
}

// Check the class of the user guess object and compare to the answer object to see if they match
function classCheck(userClass, box) {
    let classString = userClass;
    let classArray = classString.split(/\s*,\s*/);
    for (let i = 0; i <= classArray.length; i++) {
        if (userClass === answer.class) {
            classCorrect = true;
            box.classList.add('right');
            box.textContent = userClass;
        }
        else if (answer.class.includes(classArray[i])) {
            box.classList.add('partial')
            box.textContent = userClass;
        }
        else {
            box.textContent = userClass;
        }
    }
}

// Check the species of the user guess object and compare to the answer object to see if they match
function speciesCheck(userSpecies, box) {
    let speciesString = userSpecies;
    let speciesArray = speciesString.split(/\s*,\s*/);
    for (let i = 0; i <= speciesArray.length; i++) {
        if (userSpecies === answer.species) {
            raceCorrect = true;
            box.classList.add('right');
            box.textContent = userSpecies;
        }
        else if (answer.species.includes(speciesArray[i])) {
            box.classList.add('partial')
            box.textContent = userSpecies;
        }
        else {
            box.textContent = userSpecies;
        }
    }
}

// Check the gender of the user guess object and compare to the answer object to see if they match
function genderCheck(userGender, box) {
    if (userGender === answer.gender) {
        box.classList.add('right');
        box.textContent = userGender;
        genderCorrect = true;
    }
    else {
        box.textContent = userGender;
    }
}

// Check the appearacnce attribute of the user guess object and compare to the answer object to see if they match
function firstSeenCheck(userFirstSeen, box) {
    if (userFirstSeen === answer.firstSeen) {
        box.classList.add('right');
        box.textContent = userFirstSeen;
        appearanceCorrect = true;
    } else {
        box.textContent = userFirstSeen;
    }
}

// Basic code for creating hints for a user *NON-FUNCTIONAL CURRENTLY*
function hints(attemptCount) {
    const hintArea = document.getElementByClass('hints');
    const hint = document.createElement('ul')
    if (attemptCount === 3) {
        let hintHeader = document.getElementById('hintHeader');
        hintHeader.style.opacity = "1";
        hint.innerHTML = '<li>' + answer.hint1 + '/<li>'
        hintArea.appendChild(hint);
    }
    if (attemptCount === 4) {
        hint.innerHTML = '<li>' + answer.hint2 + '/<li>'
        hintArea.appendChild(hint);
    }
    if (attemptCount === 5) {
        hint.innerHTML = '<li>' + answer.hint3 + '/<li>'
        hintArea.appendChild(hint);
    }
}

// Functionality for the modal display/hiding
function modal() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const closeModalBtn = document.querySelector(".button-close");
    let modalHeader = document.getElementById('modalHeader')
    let modalBody = document.getElementById('modalBody')

    if (!winner) {
        modalHeader.innerHTML = "Nice try!";
        modalBody.innerHTML = "The answer was " + answer.name + ". Would you like to play again?";
    }
    else {
        modalHeader.innerHTML = "Great Job!";
        modalBody.innerHTML = "Would you like to play again?";
    }
    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
      };
    openModal();

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
      };
      closeModalBtn.addEventListener("click", closeModal);
}
      
// Check to see if the user has won by getting all of the requisite attribute fields matching
function winnerCheck() {
    
    if (factionCorrect && classCorrect && raceCorrect && genderCorrect && appearanceCorrect) {
        winner = true;
        setTimeout(function() {modal()}, 1000);
    }
}

// Check to see if the user has lost based on how many guess they've had
function loserCheck() {
    if (row === 5 && !winner){
        setTimeout(function() {modal()}, 1250);
    }
}

// Clears the grid and selects a new random object as the answer
function playAgain() {
        window.location.reload();
}

// function winCounter() {
//     var winCount = localStorage.getItem("winCount");

//     if (winCount === null) {
//         winCount = 0;
//         localStorage.setItem("winCount", winCount); 
//     }

//     document.getElementById('winCounter').innerHTML = winCount;
// }

//This function runs on page load where the grid and boxes are all drawn and labeled
function onStart() {
    const game = document.getElementById('game');
    drawGrid(game);
}

onStart();
getInput();