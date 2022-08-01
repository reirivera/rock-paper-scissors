let userChoice = 'rock'

function computerChoice (){
  
    let move = Math.floor(Math.random() * 3);

    if(move === 0){
        return 'rock'
    }else if(move === 1){
        return 'paper'
    }else{
        return 'scissors'
    }
    

}



 console.log(computerChoice());