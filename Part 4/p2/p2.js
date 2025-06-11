function createGame(){
    let secretNumber=Math.floor(Math.random()*10)+1;
    console.log(secretNumber);
    return function guess(number){
        if (number>secretNumber){
            return("Too High!");
        }
        else if (number<secretNumber){
            return("Too Low!");
        }
        else if (number===secretNumber){
            return("You guessed it!");
        }
    }
}
const play=createGame();

function makeGuess() {
            const input=document.getElementById("numberInput");
            const number=parseInt(input.value);
            const message=play(number);
            document.getElementById("message").textContent=message;
        }