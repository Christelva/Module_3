

const guessNumber= function(){
    secretNumber = Math.floor(Math.random() * 30);
    console.log(secretNumber);
    yourName = prompt("Welcome! What's your name?");
    alert("Hey "+ yourName );
    let yourGuess = parseInt(prompt("Input a number from 1 to 30 to start guessing."));
    for (i=5; i!=0; i--){
        if (secretNumber == yourGuess) {
            alert("You got it right!")
            break;
        }
        else {prompt("try again. You have " + i +" tries left.");       
    }
    alert("You lost!");
    }
    
}

guessNumber();