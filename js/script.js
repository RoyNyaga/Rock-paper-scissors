var userScore = 0;
var computerScore = 0;
var equal = 0; 
var userScore_span = document.querySelector("#user-score");
var computer_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector("#displayWhoWins");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
const choice_class = document.querySelectorAll(".choice");
var numOfRounds = 0;
var tie_p = document.querySelector("#displayTie");
var round_div = document.querySelector("#displayNumOfRounds");


function computerPlay(){
        var choices = ["rock", "paper", "scissors"];
        var choosenItem = Math.floor(Math.random()*choices.length);
        return choices[choosenItem];
        }

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection==="rock" && computerSelection==="paper"){
        var winner = "lose";
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        var winner = "win";
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        var winner = "lose";
    }
    else if(computerSelection==="rock" && playerSelection==="paper"){
        var winner = "win";
    }
    else if(computerSelection==="rock" && playerSelection==="scissors"){
        var winner = "lose";
    }
    else if(computerSelection==="paper" && playerSelection==="scissors"){
        var winner = "win";
    }
    else{
        var winner = "tie";
    }
    return winner;
}

function userScoreIncrease(session){
        if(session=="win"){
          userScore = userScore + 1;            
        }
        return userScore_span.textContent = userScore;
    }

function computerScoreIncrease(session){
        if(session=="lose"){
          computerScore = computerScore + 1;           
        }
        return computer_span.textContent = computerScore;
    }

function countRounds(){
    numOfRounds = numOfRounds+1;
    round_div.textContent = "Rounds:0"+numOfRounds ;
    if(numOfRounds==6){
        round_div.textContent = "Rounds"
    }
    
    return numOfRounds;
}

function resetScoreBoard(){
    userScore_span.textContent = 0;
    computer_span.textContent = 0;
    numOfRounds = 0;
    userScore = 0;
    computerScore = 0;
}

function resetTieMessage(){
    return displayTie.textContent = "";
}
function resetResultMessage(){
    return result_p.textContent =""
}

    choice_class.forEach((div) => {
    div.addEventListener("click", (e)=>{ 
        resetResultMessage()      
        resetTieMessage();
    if(e.path[1].id=="r"){ //e.path[1].id gets the id of the div performing the event and 
      var playerSelect = "rock";//from our index.html, the id for rock is "r" and if that be 
    }                          //the case then playerSelection should be "rock".
    else if(e.path[1].id=='p'){
        var playerSelect = "paper";
    }
    else if(e.path[1].id=="s"){
        var playerSelect = "scissors";
    }
    var playerSelection = playerSelect;
    var computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    var session = playRound(playerSelection, computerSelection);
    if(session=="win"){
        userScoreIncrease(session);
    }
    else if(session=="lose"){
        computerScoreIncrease(session);
    }
    else if(session=="tie"){
        displayTie.textContent = "Tie"
    }

    if(countRounds()==6){
       if(userScoreIncrease(session)>computerScoreIncrease(session)) {
             result_p.textContent ="Congratulations!! You Win out of five rounds";
             result_p.setAttribute('style', 'color: blue; background: white');    
             displayTie.textContent = "";
       }
       else if(userScoreIncrease(session)<computerScoreIncrease(session)){
            result_p.textContent ="You Lose out of five rounds";
            result_p.setAttribute('style', 'color: blue; background: red');    
            displayTie.textContent = "";
       }
       else if(userScoreIncrease(session)==computerScoreIncrease(session)){
            result_p.textContent ="It's a Tie out of five rounds";
            result_p.setAttribute("style", "color:white; background: green")
            displayTie.textContent = "";
       }
       resetScoreBoard();
    }

  });     
});
      
      

    

    

