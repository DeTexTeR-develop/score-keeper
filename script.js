const PlayerBtn1 = document.querySelector("#plyOneBtn");
const PlayerBtn2 = document.querySelector("#plyTwoBtn");

const resetBtn = document.querySelector("#resetBtn");
const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");

const winningScrSelector = document.querySelector("#playingTo");

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let gameOver = false;

winningScrSelector.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetScore();    
})

function resetScore(){
    p1score = 0;
    p2score = 0;
    gameOver = false;
    playerOneScore.innerText = p1score;
    playerTwoScore.innerText = p2score;
    playerOneScore.classList.remove('loser', 'winner');
    playerTwoScore.classList.remove('loser', 'winner');

}

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
resetBtn.addEventListener('click', resetScore);

