const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissor = document.querySelector('#s');

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
 
//make it a round of 5
