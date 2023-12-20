//const { Thrall, Uther, Sylvanas, Jaina, Anduin, Greymane, Lorthemar, Kaelthas } = heroes;
const heroList = heroes
const answer = getRandomHero();
var row = 0;
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
            console.log(userEntry.value);
            getAttempt(userEntry.value);
            userEntry.value='';
        }
    }
}

function getAttempt(userGuess) {
    console.log(userGuess);
    let updatedGuess = userGuess.replaceAll(/[^a-zA-Z]/gi, "");
    updatedGuess = updatedGuess.toLowerCase();
    console.log(updatedGuess);
    for (let i = 0; i < heroList.length; i++) {
        let parsedAnswer = heroList[i].name.replaceAll(/[^a-zA-Z]/gi, "");
        if (updatedGuess === parsedAnswer.toLowerCase()) {
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
        }, ((i + 1) * animation_duration) / 2); 

            box.classList.add('animation');
            box.style.animationDelay = `${(i * animation_duration) / 2}ms`;

    }
    row++;

    if (row === 5){
        setTimeout(loserCheck, 1000)
    }
}

        
function factionCheck(userFaction, box) {
        if (userFaction === answer.faction) {
            box.classList.add('right');
            box.textContent = userFaction;
        }
        else if (userFaction.indexOf(answer.faction) >= 0) {
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
        if (userClass === answer.class) {
            box.classList.add('right');
            box.textContent = userClass;
        }
        else if (userClass.indexOf(answer.class) >= 0) {
            box.classList.add('wrong')
            box.textContent = userClass;
        }
        else {
            box.textContent = userClass;
        }
    }

function speciesCheck(userSpecies, box) {

        if (userSpecies === answer.species) {
            box.classList.add('right');
            box.textContent = userSpecies;
        }
        else if (userSpecies.indexOf(answer.species) >= 0) {
            box.classList.add('wrong')
            box.textContent = userSpecies;
        }
        else {
            box.textContent = userSpecies;
        }
    }

function genderCheck(userGender, box) {

        if (userGender === answer.gender) {
            box.classList.add('right');
            box.textContent = userGender;
        }
        else if (userGender.indexOf(answer.gender) >= 0) {
            box.classList.add('wrong')
            box.textContent = userGender;
        }
        else {
            box.textContent = userGender;
        }
    }

function firstSeenCheck(userFirstSeen, box) {

        if (userFirstSeen === answer.firstSeen) {
            box.classList.add('right');
            box.textContent = userFirstSeen;
        }
        else if (userFirstSeen.indexOf(answer.firstSeen) >= 0) {
            box.classList.add('wrong')
            box.textContent = userFirstSeen;
        }
        else {
            box.textContent = userFirstSeen;
        }

    }

function loserCheck() {
    console.log('Check if user lost');
    if (row === 5){
        window.alert('Sorry, you are out of guesses! The answer was ' + answer.name)
    }
}

function onStart() {
    const game = document.getElementById('game');
    drawGrid(game);
}

onStart();
getInput();