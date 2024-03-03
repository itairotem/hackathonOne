
class TicTacToe {
    constructor() {
        const elements = document.querySelectorAll('.cells')
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        for (let index = 0; index < elements.length; index++) {
            const row = Math.floor(index / 3);
            const col = index % 3;
            this.board[row][col] = elements[index].textContent || '';
        }

        this.currentPlayer = 'x';
    }

    // Method to check if a player has won
    checkWin(player) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === player && this.board[i][1] === player && this.board[i][2] === player) {
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] === player && this.board[1][i] === player && this.board[2][i] === player) {
                return true;
            }
        }

        // Check diagonals
        if ((this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) ||
            (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player)) {
            return true;
        }

        return false;
    }

    // Method to check if the board is full (tie)
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

    // Method to handle player's move
    makeMove(row, col) {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            const elements = document.querySelectorAll('.cells');
            elements[row * 3 + col].textContent = this.currentPlayer;
            if (this.checkWin(this.currentPlayer)) {
                alert(`Player ${this.currentPlayer} wins!`);
                this.resetBoard();
            } else if (this.isBoardFull()) {
                alert('It\'s a tie!');
                this.resetBoard();
            } else {
                this.currentPlayer = (this.currentPlayer === 'x') ? 'o' : 'x';
            }
        } else {
            alert('Invalid move! Cell already occupied.');
        }
    }

    // Method to reset the board
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

// Now you can handle player's moves like this:
// game.makeMove(row, col);
// Where row and col are the row and column indices of the cell where the player wants to make a move.
// For example, game.makeMove(0, 0); will make a move for player 'x' on the top-left cell.




// making page interactive
const cells= document.getElementsByClassName('cells')
console.log(cells)

count=0
for (const cell of cells) {
    cell.addEventListener('click', ()=> {
        const x = Math.floor(count / 3);
        const y = count % 3;
        game.makeMove(x,y)
        count+=1
        console.log(this.board)
        
    })
}






















// boxOne= document.getElementById('one')
// boxTwo= document.getElementById('two')
// boxThree= document.getElementById('three')
// boxFour= document.getElementById('four')
// boxFive= document.getElementById('five')
// boxSix= document.getElementById('six')
// boxSeven= document.getElementById('seven')
// boxEight= document.getElementById('eight')
// boxNine= document.getElementById('nine')

// boxOne.addEventListner('click', ()=> {
//     cos
// })
