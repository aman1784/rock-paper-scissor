const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let userChoice;
let computerChoice;
let res;

const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice =  e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    else if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    else{
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    return;
}


function getResult(){
    if(userChoice === computerChoice){
        resultDisplay.innerHTML = 'Tie :) :(';
        resultDisplay.style.color = 'White';
    }

    else if( (userChoice === 'Rock') && (computerChoice === 'Paper') ){
        resultDisplay.innerHTML = 'You Lost :(';
        resultDisplay.style.color = 'red';
    }
    else if((userChoice === 'Rock') && (computerChoice === 'Scissor') ){
        resultDisplay.innerHTML = 'You Win :)';
        resultDisplay.style.color = 'green';
        
    }
    else if((userChoice === 'Paper') && (computerChoice === 'Scissor') ){
        resultDisplay.innerHTML = 'You Lost :(';
        resultDisplay.style.color = 'red';
    }

    else if((computerChoice === 'Rock') && (userChoice === 'Paper') ){
        resultDisplay.innerHTML = 'You Win :)';
        resultDisplay.style.color = 'green';
        
    }
    else if((computerChoice === 'Rock') && (userChoice === 'Scissor') ){
        resultDisplay.innerHTML = 'You Lost :(';
        resultDisplay.style.color = 'red';
    }
    else if((computerChoice === 'Paper') && (userChoice === 'Scissor') ){
        resultDisplay.innerHTML = 'You Win :)';
        resultDisplay.style.color = 'green';
        
    }
}
