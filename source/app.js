const { Thrall, Uther, Sylvanas, Jaina, Anduin, Greymane, Lorthemar } = heroes;
const heroList = [Thrall,Uther,Sylvanas, Jaina, Anduin, Greymane, Lorthemar];
const answer = getRandomHero();
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
        }
    }
}

function getAttempt(userGuess) {
    for (let i = 0; i < heroList.length; i++) {
        if (userGuess === answer.meta.name) {
            correctAnswer();
        }
        else if (userGuess === heroList[i].meta.name) {
            const userGuessObj = heroList[i]
            updateGrid(userGuessObj);
        }
    }
}

function correctAnswer() {
    const animation_duration = 500;

    for (let i = 0; i < 6; i++) {
        const box = document.getElementById(`box${row}${i}`)

        setTimeout(() => {
            if (i === 0) {
                const userName = answer.meta.name;
                box.classList.add('right');
                box.textContent = userName;
            }

            if (i === 1) {
                const userFaction = answer.meta.faction;
                factionCheck(userFaction, box);
            }

            if (i === 2) {
                const userClass = answer.meta.class;
                classCheck(userClass, box);
            }

            if (i === 3) {
                const userSpecies = answer.meta.species;
                speciesCheck(userSpecies, box);
            }

            if (i === 4) {
                const userGender = answer.meta.gender;
                genderCheck(userGender, box);
            }

            if ( i === 5) {
                const userFirstSeen = answer.meta.firstSeen;
                firstSeenCheck(userFirstSeen, box);
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animation');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;

    }
}

function updateGrid(userInput) {
    const animation_duration = 500; //ms
    
    for (let i = 0; i < 6; i++) {
        const box = document.getElementById(`box${row}${i}`)

        setTimeout(() => {
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
    console.log('Check if user lost');
    if (row === 5){
        window.alert('Sorry, you are out of guesses! The answer was ' + answer.meta.name)
    }
}

function onStart() {
    const game = document.getElementById('game');
    drawGrid(game);
}

onStart();
getInput();