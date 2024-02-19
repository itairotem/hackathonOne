const board = document.querySelector('.board');
const cells = [];

let currentPlayer = 'X';
let isGameActive = true;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Initialize the game board
function initialize() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    cells.push(cell);
    board.appendChild(cell);
  }
}

// Handle cell click event
function handleCellClick() {
  if (!isGameActive || this.textContent !== '') return;

  const index = this.dataset.index;
  this.textContent = currentPlayer;
  if (checkWin(currentPlayer)) {
    alert(`${currentPlayer} wins!`);
    isGameActive = false;
    return;
  }
  if (checkDraw()) {
    alert("It's a draw!");
    isGameActive = false;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check if the current player wins
function checkWin(player) {
  return winningCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

// Check if it's a draw
function checkDraw() {
  return cells.every(cell => cell.textContent !== '');
}

// Start the game
initialize();