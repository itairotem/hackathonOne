function addName(event) {
    event.preventDefault();
    let Player1 = document.getElementById("player1Name").value;
    let Player2 = document.getElementById("player2Name").value;
    console.log(Player1);
    console.log(Player2);

    addToTable(Player1, Player2);

}

function addToTable(play1, play2) {
    const tbody = document.querySelector('.Players-table tbody');
    const newRow = document.createElement('tr');

    const player1Cell = document.createElement('td');
    player1Cell.textContent = play1;
    newRow.appendChild(player1Cell);

    const player2Cell = document.createElement('td');
    player2Cell.textContent = play2;
    newRow.appendChild(player2Cell);

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
                    let winner;
                    if (this.currentPlayer === 'x') {
                        winner = this.Player1;
                    } else {
                        winner = this.Player2;
                    }
                    alert(`Player ${this.Player1} wins!`);  
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
