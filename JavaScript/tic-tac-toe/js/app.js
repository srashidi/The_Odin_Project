function createGame() {
    const gameboard = Array(9).fill(null);
    const players = ['X', 'O'];
    let currentPlayer = players[0];
    let gameOver = false;

    const getGameboard = () => gameboard;
    const getCurrentPlayer = () => currentPlayer;
    const getGameOver = () => gameOver;

    const checkWin = (player) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => gameboard[index] === player);
        });
    }
    const isFull = () => {
        return gameboard.every(cell => cell !== null);
    };

    const setCell = (cell, value) => {
        if (!players.includes(value)) {
            console.log("Invalid player");
            return "Invalid player";
        }

        if (gameboard[cell] === null) {
            gameboard[cell] = value;

            if (checkWin(value)) {
                gameOver = true;
                console.log(`Game Over: Player ${value} wins!`);
                return `Game Over: Player ${value} wins!`;
            } else if (isFull()) {
                gameOver = true;
                console.log("Game Over: It's a draw!");
                return `Game Over: Player ${value} wins!`;
            }

            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
            console.log(`Next Player: ${currentPlayer}`);
        } else {
            console.log("Cell already occupied");
            return "Cell already occupied";
        }
    };

    const resetGameboard = () => {
        gameboard.fill(null);
        currentPlayer = players[0];
        gameOver = false;
    };

    return {
        getGameboard,
        getCurrentPlayer,
        getGameOver,
        setCell,
        resetGameboard
    };
}

const game = createGame();
const currentPlayerDisplay = document.getElementById('current-player');
const messageDisplay = document.getElementById('message');

function renderGameboard() {
    const cells = game.getGameboard();

    cells.forEach((cell, index) => {
        const cellElement = document.getElementById(`cell-${index}`);
        cellElement.textContent = cell ? cell : '';
    });
}

function fillCell(cell) {
    const gameOver = game.getGameOver();

    if (gameOver) {
        return;
    }

    const gameboard = game.getGameboard();
    const currentPlayer = game.getCurrentPlayer();
    const result = game.setCell(cell, currentPlayer);

    if (result) {
        messageDisplay.textContent = result;

        if (result.includes('Game Over')) {
            for (let i = 0; i < gameboard.length; i++) {
                const el = document.getElementById(`cell-${i}`);
                el.removeEventListener('click', () => fillCell(i));
                el.style.cursor = 'not-allowed';
            }
        } else if (result === "Cell already occupied") {
            messageDisplay.textContent = "Cell already occupied. Choose another square.";
        } else if (result === "Invalid player") {
            resetGame();
        }

        renderGameboard();
        return;
    }

    const cellElement = document.getElementById(`cell-${cell}`);
    cellElement.disabled = true;
    cellElement.style.cursor = 'not-allowed';

    messageDisplay.textContent = `Player ${game.getCurrentPlayer()}, choose an empty square.`;
    renderGameboard();
    currentPlayerDisplay.textContent = game.getCurrentPlayer();
}

function resetGame() {
    game.resetGameboard();
    renderGameboard();

    for (let i = 0; i < game.getGameboard().length; i++) {
        const cellElement = document.getElementById(`cell-${i}`);
        cellElement.addEventListener('click', () => fillCell(i), { once: true });
        cellElement.style.cursor = 'pointer';
    }

    messageDisplay.textContent = `Let's start playing! Player ${game.getCurrentPlayer()}, choose an empty square.`;
}

resetGame();
