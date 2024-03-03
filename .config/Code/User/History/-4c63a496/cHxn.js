class TicTacToe {
    constructor() {
        const cells = document.getElementsByClassName('cells');

        for (const cell of cells) {
            cell.addEventListener('click', () => {
                const count = cell.id - 1;
                const x = Math.floor(count / 3);
                const y = count % 3;
                this.makeMove(x, y);
            
            });
        }

        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        this.currentPlayer = 'x';
    }

    checkWin(player) {
        for (let i = 0; i < 3; i++) {
            if (
                (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player) ||
                (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player)
            ) {
                return true
            }
        }

        if (
            (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
            (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
        ) {
            return true
        }

        return false;
    }

    isBoardFull() {
        for (let row of this.board) {
            for (let cell of row) {
                if (cell === '') {
                    return false;
                }
            }
        }
        return true
    }

    makeMove(row, col) {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            const elements = document.querySelectorAll('.cells');
            elements[row * 3 + col].textContent = this.currentPlayer;
    
            // Check for a win or a tie after updating the board
            if (this.checkWin(this.currentPlayer)) {
                alert(`Player ${this.currentPlayer} wins!`);
                this.resetBoard();
            } else if (this.isBoardFull()) {
                alert('It\'s a tie!');
                this.resetBoard();
            } else {
                // Switch to the next player
                this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
            }
        } else {
            alert('Invalid move! Cell already occupied.');
        }
    }


    
    resetBoard() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        const elements = document.querySelectorAll('.cells');
        elements.forEach(element => {
            element.textContent = '';
        });
        this.currentPlayer = 'x';
    }
}

// Example usage:
const game = new TicTacToe();


document.getElementById('playerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get the player names from the input fields
    var player1Name = document.getElementById('player1Name').value;
    var player2Name = document.getElementById('player2Name').value;

    // Create a new table row
    var newRow = document.createElement('tr');

    // Create table data cells for the player names
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    cell1.textContent = player1Name;
    cell2.textContent = player2Name;

    // Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Append the new row to the table body
    document.querySelector('#playerTable tbody').appendChild(newRow);

    // Clear the input fields after submitting
    document.getElementById('player1Name').value = '';
    document.getElementById('player2Name').value = '';
});
