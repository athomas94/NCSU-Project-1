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

function getRandomHero() {
    const randomHeroIndex = Math.floor(Math.random() * heroList.length);
    return heroList[randomHeroIndex];
}

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
}

        
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
            box.classList.add('wrong')
            box.textContent = userFaction;
        }
        else {
            box.textContent = userFaction;
        }
    }
}

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
            box.classList.add('wrong')
            box.textContent = userClass;
        }
        else {
            box.textContent = userClass;
        }
    }
}

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
            box.classList.add('wrong')
            box.textContent = userSpecies;
        }
        else {
            box.textContent = userSpecies;
        }
    }
}

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

function firstSeenCheck(userFirstSeen, box) {
    if (userFirstSeen === answer.firstSeen) {
        box.classList.add('right');
        box.textContent = userFirstSeen;
        appearanceCorrect = true;
    } else {
        box.textContent = userFirstSeen;
    }
}

function hints() {
    const hintArea = document.getElementByClass('hints');
    const hint = document.createElement('ul')
    if (attemptNumber === 3) {
        let hintHeader = document.getElementById('hintHeader');
        hintHeader.style.opacity = "1";
        hint.li = answer.hint1;
    }
    if (attemptNumber === 4) {
        hint.li = answer.hint2;
    }
    if (attemptNumber === 5) {
        hint.li = answer.hint3;
    }
}
      

function winnerCheck() {
    
    if (factionCorrect && classCorrect && raceCorrect && genderCorrect && appearanceCorrect) {
        winner = true;
        // wins++;
        setTimeout(function() { alert('You win!'); }, 1250)
    }
}

function loserCheck() {
    if (row === 5 && !winner){
        wins = 0;
        setTimeout(function() { window.alert('Sorry, you are out of guesses! The answer was ' + answer.name); }, 1000)
    }
}

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

function onStart() {
    const game = document.getElementById('game');
    drawGrid(game);
}

onStart();
getInput();