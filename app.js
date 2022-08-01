

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
        console.log('YOU WON! ROCK BEATS SCISSORS.')
    }else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log('YOU WON! PAPER BEATS ROCK.')
    }else if(playerChoice === 'scissors' && computerChoice ==='paper'){
        console.log('YOU WON! SCISSORS BEATS PAPER.')
    }else if (computerChoice === 'rock' && playerChoice === 'scissors'){
        console.log('YOU LOST! ROCK BEATS SCISSORS.')
    }else if (computerChoice === 'paper' && playerChoice === 'rock'){
        console.log('YOU LOST! PAPER BEATS ROCK.')
    }else if(computerChoice === 'scissors' && playerChoice ==='paper'){
        console.log('YOU LOST! SCISSORS BEATS PAPER.')
    }else if(playerChoice === 'rock' && computerChoice === 'rock'){
        console.log('ITS A TIE')
    }else if(playerChoice === 'paper' && computerChoice === 'paper'){
        console.log('ITS A TIE')
    }else if(playerChoice === 'scissors' && computerChoice === 'scissors'){
        console.log('ITS A TIE')
    }
}
const playerSelection = 'rock';
const computerSelection = computerMove();
console.log(playRound(playerSelection, computerSelection));
