

function addName(event) {
    event.preventDefault()
    let Player1 = document.getElementById("player1Name").value
    let Player2 = document.getElementById("player2Name").value
    console.log(Player1)
    console.log(Player2)

    addToTable(Player1, Player2);
}
function addToTable(play1,play2) {
    // Select the tbody element
    const tbody = document.querySelector('.Players-table tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Create the first cell for Player 1
    const player1Cell = document.createElement('td');
    player1Cell.textContent = play1 // Add 'cate' to the cell
    newRow.appendChild(player1Cell); // Append the cell to the row

    // Create the second cell for Player 2
    const player2Cell = document.createElement('td');
    player2Cell.textContent = play2; // Add 'simon' to the cell
    newRow.appendChild(player2Cell); // Append the cell to the row

   
    // Append the new row to the tbody
    tbody.appendChild(newRow);
}

// Call the addToTable function to add the names to the table




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
                // if (player=='x') {
                //     winnerCell.textContent(player1)
                // }
                // else if (player=='o') {
                //     winnerCell.textContent(player2)
                // }
                return true
            }
        }

        if (
            (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
            (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
        ) {
            // if (player=='x') {
            //     winnerCell.textContent(player1)
            // }
            // else if (player=='o') {
            //     winnerCell.textContent(player2)
            // }
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
                setTimeout(() => {
                    alert(`Player ${this.currentPlayer} wins!`);
                    this.resetBoard();
                    // const tbody = document.querySelector('.Players-table tbody');

                    const newRow = document.createElement('tr');
                    const winnerCell = document.createElement('td');
                    console.log(this.currentPlayer);
                    winnerCell.textContent = this.currentPlayer;
                    newRow.appendChild(winnerCell)
                    console.log(newRow)
                    console.log(winnerCell)
                }, 100); // 2-second delay
            } else if (this.isBoardFull()) {
                setTimeout(() => {
                    alert('It\'s a tie!');
                    this.resetBoard();
                }, 100); // 2-second delay
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




