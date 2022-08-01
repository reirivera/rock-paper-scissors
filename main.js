function computerChoice(){
    const moves = ['r', 'p', 's'];
    let random = Math.floor(Math.random() * 3);
    return moves[random];
}

function word (letter){
    if (letter === 'r'){
        return 'rock'
    }else if (letter === 'p'){
        return 'paper'
    }else{
        return 'scissor'
    }
}

function playRound(playerSelection){

 playerSelection = 'r';
 computerSelection = computerChoice();  
    
switch(playerSelection + computerSelection){
    case 'rs':
    case 'pr':
    case 'sp':
        console.log('YOU WON!')
         break;
    case 'rp':
    case 'ps':
    case 'sr':
        console.log('YOU LOST!')
        break;
    case 'rr':
    case 'pp':
    case 'ss':
        console.log('IT/S A TIE!')
        break;
}
}

console.log(playRound());
 
