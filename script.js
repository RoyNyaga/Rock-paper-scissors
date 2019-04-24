
// A function that randomly displays "rock", "paper" or "scissors" per call,It is
// automated to play against a user
function computerPlay(){
        var choices = ["rock", "paper", "scissors"];
        var choosenItem = choices[Math.floor(Math.random()*choices.length)];
        return choosenItem;
        }

// function that does a logic to determine a winner 
    function playRound(playerSelection, computerSelection) {
// converting users input to lowercase, this is to make the function case insensitive.
        var playerSelectionToLowerCase = playerSelection.toLowerCase();
        
        if(playerSelectionToLowerCase==="rock" && computerSelection==="paper"){
            var winner = "You lose";
        }
        else if(playerSelectionToLowerCase==="rock" && computerSelection==="scissors"){
            var winner = "You win";
        }
        else if (playerSelectionToLowerCase==="paper" && computerSelection==="scissors"){
            var winner = "You lose";
        }
        else if(computerSelection==="rock" && playerSelectionToLowerCase==="paper"){
            var winner = "You win";
        }
        else if(computerSelection==="rock" && playerSelectionToLowerCase==="scissors"){
            var winner = "You lose";
        }
        else if(computerSelection==="paper" && playerSelectionToLowerCase==="scissors"){
            var winner = "You win";
        }
        else{
            var winner = "It is a tie";
        }
        return winner;
    }