//selecting buttons 
const PlayerBtn1 = document.querySelector("#plyOneBtn");
const PlayerBtn2 = document.querySelector("#plyTwoBtn");

let minimum =1;

//selecting Display elements form the page
const resetBtn = document.querySelector("#resetBtn");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");

// this is the score for which the game will be played
const winningScrSelector = document.querySelector("#playingTo");

//setting default scores and values
let p1score = 0;
let p2score = 0;
let winningScore = 3;
let gameOver = false;

//using value of select to add the scores for which the game will be played and when you change the game winning point 
//it calls the reset function to set everything to default
winningScrSelector.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetScore();    
})

// this function just removes all the values, scores, and styles and resets the site to default
function resetScore(){
    p1score = 0;
    p2score = 0;
    gameOver = false;
    playerOneScore.innerText = p1score;
    playerTwoScore.innerText = p2score;
    playerOneScore.classList.remove('loser', 'winner');
    playerTwoScore.classList.remove('loser', 'winner');

}

//this eventlistener works on click and this function help update values, class(for change in colour)
PlayerBtn1.addEventListener('click', function(){
    if(!gameOver){
        p1score++;
        playerOneScore.innerText = p1score;
        if(p1score === winningScore){
            gameOver = true;
            playerOneScore.classList.add('winner');    
            playerTwoScore.classList.add('loser');
        }
    }else{
        alert("Game Over!!")
    }
})

//this eventlistener works on click and this function help update values, class(for change in colour)

PlayerBtn2.addEventListener('click', function(){
    if(!gameOver){
        p2score++;
        playerTwoScore.innerText = p2score;
        if(p2score === winningScore){
            gameOver = true;  
            playerOneScore.classList.add('loser');    
            playerTwoScore.classList.add('winner');  
        }
    }else{
        alert("Game Over!!")
    }
})
//this is reset button changes everything to default by calling resetscore function
resetBtn.addEventListener('click', resetScore);

