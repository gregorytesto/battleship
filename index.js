// let totalShips = {
// 	4: 1, // battleship
// 	3: 2, // cruisers
// 	2: 3, // destroyers
// 	1: 4, // submarines
// };

// let shipsOnBoard = {
// 	4: 0,
// 	3: 0,
// 	2: 0,
// 	1: 0,
// };

// console.log every tile
// find hortizontal tiles,

// sub-problems
// validate correct shape of ships
// validate hortizontal, vertical and diagnal not touching rule
// validate correct size of ships
// validate correct total number of ships
// validate correct kind of ships

function validateBattlefield(board) {
	// let row = 5;
	// let column = 5;
	// let current = board[row][column];
	// let left = board[row][column-1];
	// let right = board[row][column+1];
	// let bottom = board[row+1][column];
	// let top = board[row-1][column];
	// let values = [current, left, top, right, bottom];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			let current = board[i][j];
			let left = board[i][j - 1] === undefined ? null : board[i][j - 1];
			let right = board[i][j + 1] === undefined ? null : board[i][j + 1];
			let bottom = board[i + 1] ? board[i + 1][j] : null;
			let top = board[i - 1] ? board[i - 1][j] : null;

			// let topLeft = board[i - 1][j - 1];
			// let topRight = board[i - 1][j + 1];
			// let bottomLeft = board[i + 1][j - 1];
			// let bottomRight = board[i + 1][j - 1];

			// let values = [current, left, top, right, bottom];

			// console.log(current, top, right)
			if (current && (top || bottom) && (left || right)) {
				return false;
			}
			// current && right && bottom
			// current && top && left
			// console.log(values);
		}
	}
	return true;
}
let result = validateBattlefield([
	[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
	[1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
	[1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
console.log(result);
