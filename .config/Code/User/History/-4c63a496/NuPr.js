document.addEventListener('DOMContentLoaded'), () => {
    const board = document.getElementById('board');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let cells = [];

    // Create the grid cells
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleClick);
            board.appendChild(cell);
            cells.push(cell);
        }
    }
}