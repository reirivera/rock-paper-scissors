const btn = document.getElementById('btn');

function computerMove (){
    
    let move = Math.floor(Math.random() * 3);

    if(move === 0){
        return 'rock'
    }else if(move === 1){
        return 'paper'
    }else{
        return 'scissors'
    }
    

}


function playRound (playerChoice, computerChoice){
    if (playerChoice === 'rock' && computerChoice === 'scissors'){
        return ('YOU WON! ROCK BEATS SCISSORS.')
    }else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return ('YOU WON! PAPER BEATS ROCK.')
    }else if(playerChoice === 'scissors' && computerChoice ==='paper'){
        return ('YOU WON! SCISSORS BEATS PAPER.')
    }else if (computerChoice === 'rock' && playerChoice === 'scissors'){
        return ('YOU LOSE! ROCK BEATS SCISSORS.')
    }else if (computerChoice === 'paper' && playerChoice === 'rock'){
        return ('YOU LOSE! PAPER BEATS ROCK.')
    }else if(computerChoice === 'scissors' && playerChoice ==='paper'){
        return ('YOU LOSE! SCISSORS BEATS PAPER.')
    }else if(playerChoice === 'rock' && computerChoice === 'rock'){
        return ('ITS A TIE')
    }else if(playerChoice === 'paper' && computerChoice === 'paper'){
        return ('ITS A TIE')
    }else if(playerChoice === 'scissors' && computerChoice === 'scissors'){
        return ('ITS A TIE')
    }
}
const playerSelection = prompt('rock / paper/ scissors: ');
const computerSelection = computerMove();
let userScore = 0;
let computerScore = 0;
console.log(playRound(playerSelection, computerSelection));
console.log(userScore, computerScore)

