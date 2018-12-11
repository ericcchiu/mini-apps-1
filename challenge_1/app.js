let playerId = 1;
let playerState = false;
let playerXWin = false;
let playerYWin = false;
let playerOutcome;


const board = {
  1: 'n', 2: 'n', 3: 'n',
  4: 'n', 5: 'n', 6: 'n',
  7: 'n', 8: 'n', 9: 'n'
}

const checkHorizontal = (board) => {
  if (board[1] === 'X' && board[2] === 'X' && board[3] === 'X') {
    return 'Player X won';
  } else if (board[4] === 'X' && board[5] === 'X' && board[6] === 'X') {
    return 'Player X won';
  } else if (board[7] === 'X' && board[8] === 'X' && board[9] === 'X') {
    return 'Player X won';
  }

  if (board[1] === 'Y' && board[2] === 'Y' && board[3] === 'Y') {
    return 'Player Y won';
  } else if (board[4] === 'Y' && board[5] === 'Y' && board[6] === 'Y') {
    return 'Player Y won';
  } else if (board[7] === 'Y' && board[8] === 'Y' && board[9] === 'Y') {
    return 'Player Y won';
  }
}

const checkVertical = (board) => {
  if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    return 'Player X won';
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    return 'Player X won';
  } else if (board[3] === 'X' && board[6] === 'X' && board[9] === 'X') {
    return 'Player X won';
  }

  if (board[1] === 'Y' && board[4] === 'Y' && board[7] === 'Y') {
    return 'Player Y won';
  } else if (board[2] === 'Y' && board[5] === 'Y' && board[8] === 'Y') {
    return 'Player Y won';
  } else if (board[3] === 'Y' && board[6] === 'Y' && board[9] === 'Y') {
    return 'Player Y won';

  }

}

const checkDiagonal = board => {
  if (board[1] === 'X' && board[5] === 'X' && board[9] === 'X') {
    return 'Player X won';
  } else if (board[3] === 'X' && board[5] === 'X' && board[7] === 'X') {
    return 'Player X won';
  }

  if (board[1] === 'Y' && board[5] === 'Y' && board[9] === 'Y') {
    return 'Player Y won';
  } else if (board[3] === 'Y' && board[5] === 'Y' && board[7] === 'Y') {
    return 'Player Y won';
  }
}


const addXorO = (event) => {


  if (!playerState && playerId === 1 && board[event.target.id] === 'n') {
    document.getElementById(`${event.target.id.toString()}`).innerHTML = 'X';
    board[event.target.id] = 'X';
    playerId++;
    playerState = !playerState;
  } else if (playerState && playerId === 2 && board[event.target.id] === 'n') {
    document.getElementById(`${event.target.id.toString()}`).innerHTML = 'Y';
    board[event.target.id] = 'Y';
    playerId--;
    playerState = !playerState;
  }


  if (checkHorizontal(board) === 'Player X won') {
    return document.getElementById('Outcome').innerText = 'Player X won!';
  } else if (checkVertical(board) === 'Player X won') {
    return document.getElementById('Outcome').innerText = 'Player X won!';
  } else if (checkDiagonal(board) === 'Player X won') {
    return document.getElementById('Outcome').innerText = 'Player X won!';
  } else if (checkHorizontal(board) === 'Player Y won') {
    return document.getElementById('Outcome').innerText = 'Player Y won!';
  } else if (checkVertical(board) === 'Player Y won') {
    return document.getElementById('Outcome').innerText = 'Player Y won!';
  } else if (checkDiagonal(board) === 'Player Y won') {
    return document.getElementById('Outcome').innerText = 'Player Y won!';
  }
  return document.getElementById('Outcome').innerText = 'No outcomes yet';

}

const clearGame = () => {
  console.log('GAME CLEARED');
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${i}`).innerText = 'n';
    board[i] = 'n';
  }
}




// Restart Game 
document.getElementById('Restart').addEventListener("click", clearGame);



// Add event listeners to all of the td elements
for (let i = 1; i <= 9; i++) {
  document.getElementById(`${i.toString()}`).addEventListener("click", addXorO);
}



