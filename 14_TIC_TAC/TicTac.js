let boxes = document.querySelectorAll(".box");
let resets = document.querySelectorAll(".reset");
let turnDetails = document.querySelectorAll(".turnDetails");
let winModel = document.querySelectorAll(".modal");
let winMsgContent = document.querySelectorAll(".winMsgContent");
let playAgain = document.querySelectorAll(".play-again");
let enterMusic = new Audio("souonds/Copy of ting.mp3");
let winMusic = new Audio("souonds/Copy of gameover.mp3");

let turn = "X";
let isGameOver = false;

let changeTurn = () => {
  turn = turn === "X" ? "0" : "X"; // not understanding this condiion properly ||
};

let checkWin = () => {
  //checkWin is going to check all the wining condition
  let win = [
    // win going to store the all winning condition

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < win.length; i++) {
    let indexes = win[i];
    if (
      // this is winnig condition
      boxes[indexes?.[0]].innerHTML === boxes[indexes?.[1]].innerHTML &&
      boxes[indexes?.[1]].innerHTML === boxes[indexes?.[2]].innerHTML &&
      boxes[indexes?.[0]].innerHTML !== ""
    ) {
      let winner = boxes[indexes?.[0]].innerHTML;
      turnDetails[0].innerText = `${winner} won`;
      isGameOver = true;
      winMusic.play();

      // Opening Win Model
      winMsgContent[0].innerText = `Player ${winner} Wins !`;
      winModel[0].style.display = "flex";
      playAgain[0].addEventListener("click", resetFunction);
    }
  }
};

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", (e) => {
    if (e.target.innerHTML === "" && !isGameOver) {
      e.target.innerHTML = turn; // entering the text in in html tag || Play with e.target.innerHTML
      changeTurn();
      turnDetails[0].innerText = `Turn for ${turn}`;
      enterMusic.play();
      checkWin(); // calling the function , then the win condition is apply
      checkForDraw();
    }
  });
}

let resetFunction = () => {
  for (let i = 0; i < boxes.length; i++) {
    // Creating a Reset Button || Reset button a click korle boxex er element guli empty hoe jabe

    boxes[i].innerHTML = "";
  }
  turn = "X"; // By Default X anar jonne || means jokhon ami 1st click korbo tokhon jate X print hoi seta er logic
  isGameOver = false;
  turnDetails[0].innerText = "Turn for X";
  winModel[0].style.display = "none";
};

resets[0].addEventListener("click", () => resetFunction());

let checkForDraw = () => {
  let anyBlocksEmpty = false;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === "") {
      anyBlocksEmpty = true;
      break;
    }
  }
  if (anyBlocksEmpty) {
    return;
  }
  if (!anyBlocksEmpty && !isGameOver) {
    winMsgContent[0].innerText = `Its a draw`;
    winModel[0].style.display = "flex";
    playAgain[0].addEventListener("click", resetFunction);
    winMusic.play();
  }
};

/* what I learn in this project */
/* 

 1. event object 
 2. How to create a reset button || How to clear HTML tag on click
 3. how to enter text in HTML tag on click
 4. Adding audio in js, and how to play this audio on click || 
 5. What is audio object and its methods 
 6. Rewatch again ternary operator



*/
