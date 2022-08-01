const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissor = document.querySelector('#s');
const userScore_span = document.querySelector('.userscore')
const computerScore_span = document.querySelector('.computerscore');
const message = document.querySelector('message');
let playerScore = 0;
let computerScore = 0;

//get an random word from the array
function computerChoice(){
    const moves = ['r', 'p', 's'];
    let random = Math.floor(Math.random() * 3);
    return moves[random];
}

//translate that letter into word
function word (letter){
    if (letter === 'r'){
        return 'rock'
    }else if (letter === 'p'){
        return 'paper'
    }else{
        return 'scissor'
    }
}
//compare each letter and possibilities to win/ lose or ties
function playRound(playerSelection){

 computerSelection = computerChoice();  
    
switch(playerSelection + computerSelection){
    case 'rs':
    case 'pr':
    case 'sp':
        win();
         break;
    case 'rp':
    case 'ps':
    case 'sr':
        lost();
        break;
    case 'rr':
    case 'pp':
    case 'ss':
        console.log('ITS A TIE!',  playerScore, computerScore)
        break;
}
}


//player selection
function main (){
    rock.addEventListener('click', function(){
        playRound('r');
    })
    paper.addEventListener('click', function(){
        playRound('p');
    })
    scissor.addEventListener('click', function(){
       playRound('s');
    })

}

main();
 

function win(playerSelection){
    playerScore++;
    userScore_span.innerHTML = playerScore;
    console.log('YOU WON!', playerScore, computerScore)
    if(playerScore >= 5){
        alert('YOU WON THE GAME!')
    }
}

function lost(computerSelection){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    console.log('YOU LOST!', playerScore, computerScore)
    if (computerScore >= 5){
        alert('THE COMPUTER WINS THE GAME!')
    }
}
