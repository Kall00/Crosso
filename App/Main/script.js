let player1 = "player 1";
let player2 = "player 2";
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

function showNoti(winner){
  let notify = document.querySelector(".notify");
  if (winner =="draw"){
    notify.innerHTML = "Draw ðŸ˜…";
  }else{
    notify.innerHTML = `${winner} wins the game ðŸŽ‰`;
  }
  notify.style.display = "inline";
  setTimeout(() => {
    notify.style.display = "none";
  }, 2000);
}

function updateScore(winner){
  if (winnner == player1){
    document.querySelector(".player1").innerHTML = `Player 1: ${++player1Score}`;
  }else if (winner == player2){
    doucment.querySelector(".player2").innerHTML = `Player 2: ${++player2Score}`;
}
}

function resetBoard(){
Array.from(document.getElementsByClassName('box')).forEach(box => {
  box.innerHTML = "";
});
}

function isbingo(){
  let bingo = false;
  let draw = true;
  let winner = "";



  if (bingo){
   // resetting the board
  resetBoard();
  // updating the score
  updateScore(winner);
    // showing winner
    showNoti(winner);
  // resetting the turn
  player1Turn = true;
  }

  // checking for draw
  Array.from(document.getElementsByClassName('box')).forEach(box => {
  if (box.innerHTML == ""){
    draw = false;
  }else{
    draw = true;
  }
});

  if (draw){
    // resetting the board
    resetBoard();
    // updating the score
    updateScore("draw");
    // showing winner
    showNoti("draw");
    // resetting the turn
    player1Turn = true;
  }

}

// click event for putting X or O
const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => { element.addEventListener('click', (e) => {


  //disabling the click
  if(e.target.innerText!= ""){
    return;
  }

  // managing x or 0
  if(player1Turn){
    e.target.innerHTML = "X";
    player1Turn = false;
  }else{
    e.target.innerHTML = "O";
    player1Turn = true;
  }

  // checking for bingo
  isbingo();

  });
});;