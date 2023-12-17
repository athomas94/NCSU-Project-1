const { Thrall, Uther, Sylvanas } = heroes;
const heroList = [Thrall,Uther,Sylvanas];
const answer = heroList[0];
var row = 0;


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
    // Math.floor(Math.random()*8)
    return heroList[0];
}

function getInput() {
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter') {
            const userEntry = document.getElementById('answerBox');
            console.log(userEntry.value);
            getAttempt(userEntry.value);
        }
    }
}

function getAttempt(userGuess) {
    for (let i = 0; i < heroList.length; i++) {
        if (userGuess === answer.meta.name) {
            correctAnswer(userGuess);
        }
        else if (userGuess === heroList[i].meta.name) {
            const userGuessObj = heroList[i]
            updateGrid(userGuessObj);
        }
    }
}

function correctAnswer(userGuess) {
    alert('Correct! The answer was ' + userGuess);
}

function updateGrid(userInput) {
    for (let i = 0; i < 6; i++) {
        const box = document.getElementById(`box${row}${i}`)

        if (i === 0) {
            const userName = userInput.meta.name;
            box.textContent = userName;
        }

        if (i === 1) {
            const userFaction = userInput.meta.faction;
            factionCheck(userFaction, box);
        }

        if (i === 2) {
            const userClass = userInput.meta.class;
            classCheck(userClass, box);
        }

        if (i === 3) {
            const userSpecies = userInput.meta.species;
            speciesCheck(userSpecies, box);
        }

        if (i === 4) {
            const userGender = userInput.meta.gender;
            genderCheck(userGender, box);
        }

        if ( i === 5) {
            const userFirstSeen = userInput.meta.firstSeen;
            firstSeenCheck(userFirstSeen, box);
        }

    }
    row++;
    setTimeout(loserCheck, 1000)
}

        
function factionCheck(userFaction, box) {
        if (userFaction === answer.meta.faction) {
            box.classList.add('right');
            box.textContent = userFaction;
        }
        else if (userFaction.indexOf(answer.meta.faction) >= 0) {
            box.classList.add('wrong')
            box.textContent = userFaction;
        }
        else {
            box.textContent = userFaction;
        }
    }

function classCheck(userClass, box) {
    console.log(userClass);
    console.log(box);
        if (userClass === answer.meta.class) {
            box.classList.add('right');
            box.textContent = userClass;
        }
        else if (userClass.indexOf(answer.meta.class) >= 0) {
            box.classList.add('wrong')
            box.textContent = userClass;
        }
        else {
            box.textContent = userClass;
        }
    }

function speciesCheck(userSpecies, box) {

        if (userSpecies === answer.meta.species) {
            box.classList.add('right');
            box.textContent = userSpecies;
        }
        else if (userSpecies.indexOf(answer.meta.species) >= 0) {
            box.classList.add('wrong')
            box.textContent = userSpecies;
        }
        else {
            box.textContent = userSpecies;
        }
    }

function genderCheck(userGender, box) {

        if (userGender === answer.meta.gender) {
            box.classList.add('right');
            box.textContent = userGender;
        }
        else if (userGender.indexOf(answer.meta.gender) >= 0) {
            box.classList.add('wrong')
            box.textContent = userGender;
        }
        else {
            box.textContent = userGender;
        }
    }

function firstSeenCheck(userFirstSeen, box) {

        if (userFirstSeen === answer.meta.firstSeen) {
            box.classList.add('right');
            box.textContent = userFirstSeen;
        }
        else if (userFirstSeen.indexOf(answer.meta.firstSeen) >= 0) {
            box.classList.add('wrong')
            box.textContent = userFirstSeen;
        }
        else {
            box.textContent = userFirstSeen;
        }

    }

function loserCheck() {
    if (row === 5){
        alert('Sorry, you are out of guesses! The answer was ' + answer.meta.name)
    }
}

function onStart() {
    const game = document.getElementById('game');
    const answer = getRandomHero();
    console.log(answer);
    drawGrid(game);
}

onStart();
getInput();