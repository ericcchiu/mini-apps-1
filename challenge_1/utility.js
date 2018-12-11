const addXorO = (event) => {
  console.log(event.target.id);

  if (!playerState && playerId === 1 && board[event.target.id] === 'n') {
    document.getElementById(`${event.target.id.toString()}`).innerHTML = 'X';
    board[event.target.id] = 'X';
    playerId++;
    playerState = !playerState;
  } else if (playerState && playerId === 2 && board[event.target.id] === 'n') {
    document.getElementById(`${event.target.id.toString()}`).innerHTML = 'O';
    board[event.target.id] = 'O';
    playerId--;
    playerState = !playerState;
  }
}

module.export = {
  addXorO: addXorO,

}