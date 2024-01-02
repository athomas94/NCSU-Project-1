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
                console.log(userFaction);
                factionCheck(userFaction, box);
            }

            if (i === 2) {
                const userClass = userInput.class;
                console.log(userClass);
                classCheck(userClass, box);
            }

            if (i === 3) {
                const userSpecies = userInput.species;
                console.log(userSpecies);
                speciesCheck(userSpecies, box);
            }

            if (i === 4) {
                const userGender = userInput.gender;
                console.log(userGender);
                genderCheck(userGender, box);
            }

            if ( i === 5) {
                const userFirstSeen = userInput.firstSeen;
                console.log(userFirstSeen);
                firstSeenCheck(userFirstSeen, box);
            }
        }, ((i + 1) * animation_duration) / 2); 

            box.classList.add('animation');
            box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
    row++;
    attemptNumber++;
    // console.log('Faction match: ' + factionCorrect);
    // console.log('Class match: ' + classCorrect);
    // console.log('Race match: ' + raceCorrect);
    // console.log('Gender match: ' + genderCorrect);
    // console.log('Appearance match: ' + appearanceCorrect);
    // setTimeout(winnerCheck(), 5000);

    // if (row === 5){
    //     setTimeout(loserCheck(), 2000)
    // }
    winnerCheck();
}

        
function factionCheck(userFaction, box) {
    if (userFaction === answer.faction) {
        factionCorrect = true;
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
        if (userClass === answer.class) {
            box.classList.add('right');
            box.textContent = userClass;
            classCorrect = true;
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
            raceCorrect = true;
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
            genderCorrect = true;
        }
        else if (userGender.indexOf(answer.gender) >= 0) {
            box.classList.add('wrong')
            box.textContent = userGender;
            resolve(false);
        }
        else {
            box.textContent = userGender;
            resolve(false);
        }
}

function firstSeenCheck(userFirstSeen, box) {
        if (userFirstSeen === answer.firstSeen) {
            box.classList.add('right');
            box.textContent = userFirstSeen;
            appearanceCorrect = true;
        } else if (userFirstSeen.indexOf(answer.firstSeen) >= 0) {
            box.classList.add('wrong');
            box.textContent = userFirstSeen;
        } else {
            box.textContent = userFirstSeen;
        }
}
      

function winnerCheck() {
    
    if (factionCorrect && classCorrect && raceCorrect && genderCheckr && appearanceCorrect) {
        winner = true;
        alert('You win!')
    }
    else {
        console.log('Faction match: ' + factionCorrect);
        console.log('Class match: ' + classCorrect);
        console.log('Race match: ' + raceCorrect);
        console.log('Gender match: ' + genderCorrect);
        console.log('Appearance match: ' + appearanceCorrect);
    }
}

function loserCheck() {
    console.log('Check if user lost');
    if (row === 5 && !winner){
        window.alert('Sorry, you are out of guesses! The answer was ' + answer.name)
    }
}

function onStart() {
    const game = document.getElementById('game');
    drawGrid(game);
}

onStart();
getInput();