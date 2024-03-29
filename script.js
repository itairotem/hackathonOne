let Player1 = ''
let Player2 = ''
function addName(event) {
    event.preventDefault();
    Player1 = document.getElementById("player1Name").value;
    Player2 = document.getElementById("player2Name").value;
    addToTable(Player1, Player2)
    document.getElementById("player1Name").value = '';
    document.getElementById("player2Name").value = '';
}

function addToTable(play1, play2) {
    Player1 = document.getElementById("player1Name").value;
    Player2 = document.getElementById("player2Name").value;
    const tbody = document.querySelector('.Players-table tbody');
    const newRow = document.createElement('tr');

    const player1Cell = document.createElement('td');
    player1Cell.textContent = play1;
    newRow.appendChild(player1Cell);

    const player2Cell = document.createElement('td');
    player2Cell.textContent = play2;
    newRow.appendChild(player2Cell);


    // const winnerCell = document.createElement('td');
    // winnerCell.textContent = win;
    // newRow.appendChild(winnerCell);

    tbody.appendChild(newRow);
}

class TicTacToe {
    constructor(Player1, Player2) {
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
        this.Player1 = Player1;
        this.Player2 = Player2;
        this.winner = '';
    }


    checkWin(player) {
        for (let i = 0; i < 3; i++) {
            if (
                (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player) ||
                (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player)
            ) {
                return true;
            }
        }

        if (
            (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
            (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)
        ) {
            return true;
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
        return true;
    }

    makeMove(row, col) {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            const elements = document.querySelectorAll('.cells');
            elements[row * 3 + col].textContent = this.currentPlayer;
    
            if (this.checkWin(this.currentPlayer)) {
                setTimeout(() => {
                    console.log(Player1);
                    let winner = ''
                    if (this.currentPlayer == 'x') {
                        winner = Player1;
                    } else {
                        winner = Player2;
                    }
                    alert(`${winner} wins!`); 
                    // addToTable(Player1, Player2, winner);
                    this.resetBoard();
                }, 100);
            } else if (this.isBoardFull()) {
                setTimeout(() => {
                    alert('It\'s a tie!');
                    this.resetBoard();
                }, 100);
            } else {
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