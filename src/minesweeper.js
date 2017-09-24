const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++){
    let row = [];
    for (let j = 0; j < numberOfColumns; j++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++){
    let row = [];
    for (let j = 0; j < numberOfColumns; j++){
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // TO DO: control flow (we dont want bombs placed on top of exisiting bombs)

  }


  return board;


};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'))
};

let playerBoard = generatePlayerBoard(4, 5);
let bombBoard = generateBombBoard(4, 5, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
