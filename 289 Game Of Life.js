/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.
*/

/*
0 0 -> 0
1 1 -> 1
0 1 -> 2
1 0 -> 3
*/

var getLiveNum = function (board, x, y) {
	let count = 0;
	for (let row = x - 1; row <= x + 1; row++) {
		for (let col = y - 1; col <= y + 1; col++) {
			if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || (row === x && col === y)) {
				continue;
			}
			if (board[row][col] === 1 || board[row][col] === 3) {
				count++;
			}
		}
	}
	return count;
}


var gameOfLife = function (board) {
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			let lives = getLiveNum(board, row, col);
			if (board[row][col] === 0 || board[row][col] === 2) {
				if (lives === 3) {
					board[row][col] = 2;
				}
			} else {
				if (lives < 2) {
					board[row][col] = 3;
				} else if (lives === 2 || lives === 3) {
					board[row][col] = 1;
				} else {
					board[row][col] = 3;
				}
			}
		}
	}

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			if (board[row][col] === 0 || board[row][col] === 3) {
				board[row][col] = 0;
			} else {
				board[row][col] = 1;
			}
		}
	}
}


/*
位运算解法
*/
var getCellStatus = function (board, x, y) {
	if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
		return 0;
	}
	return board[x][y] & 1;
}

var gameOfLife2 = function(board) {
    if (board.length === 0 || board[0].length === 0) {
        return;
    }
    
    dx = [1, 1, 1, 0, 0, -1, -1, -1];
	dy = [1, 0, -1, 1, -1, 1, 0, -1];

	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			let numOfLives = 0;
			for (let i = 0; i < 8; i++) {
				let nx = row + dx[i];
				let ny = col + dy[i];
				
				numOfLives += getCellStatus(board, nx, ny);
			}
			if ((numOfLives + board[row][col] === 3) || numOfLives === 3) {
				board[row][col] |= 2;
			}
		}
	}
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			board[i][j] = board[i][j] >> 1;
		}
	}
};


