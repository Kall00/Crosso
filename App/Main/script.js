let player1 = "player 1";
let player2 = "player 2";
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let winner = " ";

function showNoti(){
  let notify = document.querySelector(".notify");
  if (winner =="draw"){
    notify.innerHTML = "Draw 😅";
  }else{
    notify.innerHTML = `${winner} wins the game 🎉`;
  }
  notify.style.display = "inline";
  setTimeout(() => {
    notify.style.display = "none";

    // updating the score
    updateScore();
    
    // resetting the board
    resetBoard();
    
  }, 1400);
}

function updateScore(){
  if (winner == player1){
    document.querySelector(".player1").innerHTML = `Player 1: ${++player1Score}`;
  }else if (winner == player2){
    document.querySelector(".player2").innerHTML = `Player 2: ${++player2Score}`;
}
}

function resetBoard(){
Array.from(document.getElementsByClassName('box')).forEach(box => {
  box.innerHTML = "";
});

  // reset winner variable
  winner = " ";
}

function isbingo(){
  let draw = true;

 // deciding the winner
  check_winner();


  if (winner != " "){
    
    // showing notification
    showNoti();

    // resetting the turn
  player1Turn = true;
    
  }

  // checking for draw

  if (winner == " "){
    Array.from(document.getElementsByClassName('box')).forEach(box => {
  if (box.innerHTML == ""){
    draw = false;
  }
});

  if (draw){
    // showing winner
    winner = "draw";
    showNoti();
    // resetting the turn
    player1Turn = true;
  }
    
  }

}

function check_winner(){

  let winning_combinations =
    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

  // checking if any of 3 combined positions contains either whole x or 0

  for (let i = 0; i < winning_combinations.length; i++){
    let [a,b,c] = winning_combinations[i];
    if (document.getElementsByClassName('box')[a].innerHTML == "X" && document.getElementsByClassName('box')[b].innerHTML == "X" && document.getElementsByClassName('box')[c].innerHTML == "X"){
      winner = player1; 
      break;
    } else if(document.getElementsByClassName('box')[a].innerHTML == "O" && document.getElementsByClassName('box')[b].innerHTML == "O" && document.getElementsByClassName('box')[c].innerHTML == "O"){
      winner = player2;
      break;
    }
  }
  
}

// click event for putting X or O
const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element => { element.addEventListener('click', (e) => {


  //disabling the click
  if(e.target.innerText!= "" || winner!= " "){
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