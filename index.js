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
// validate correct shape of ships X
// validate hortizontal, vertical and diagnal not touching rule X
// validate correct size of ships X
// validate correct total number of ships
// validate correct kind of ships

// let tilesVisited = ["0,1"];

// let connectedTiles = {
// 	"0,1": ["0,2"],
// };

function validateBattlefield(board) {
	let connectedTiles = {};

	for (let i = 0; i < board.length; i++) {
		let tilesTakenUp = 0;
		let coordObj = {};
		for (let j = 0; j < board[i].length; j++) {
			let current = board[i][j];

			let left = board[i][j - 1];
			let top = board[i - 1]?.[j];
			let right = board[i][j + 1];
			let bottom = board[i + 1]?.[j];

			let topLeft = board[i - 1]?.[j - 1];
			let topRight = board[i - 1]?.[j + 1];
			let bottomLeft = board[i + 1]?.[j - 1];
			let bottomRight = board[i + 1]?.[j - 1];

			if (current === 1) {
				let coord = i + "," + j;
				let adjTiles = [];

				left && adjTiles.push(i + "," + (j - 1));
				top && adjTiles.push(i - 1 + "," + j);
				right && adjTiles.push(i + "," + (j + 1));
				bottom && adjTiles.push(i + 1 + "," + j);
				connectedTiles[coord] = adjTiles;

				coordObj[i] = coordObj[i] ? [...coordObj[i], j] : [j];
				tilesTakenUp++;
				if (tilesTakenUp > 4) {
					return false;
				}
			} else {
				tilesTakenUp = 0;
			}

			if (current) {
				if ((top || bottom) && (left || right)) {
					// No vertical/hortizontal combination
					return false;
				}
				if (topLeft || topRight || bottomLeft || bottomRight) {
					// No Diagnal touching
					return false;
				}
			}
		}
	}

	let tilesVisited = [];

	let result = Object.keys(connectedTiles).reduce((accum, curr, index) => {
		let stack = [curr];
		while (stack.length) {
			let temp = stack.pop();
			if (!connectedTiles[temp].length) accum[index] = [temp];
			for (let adj of connectedTiles[temp]) {
				if (!tilesVisited.includes(adj)) {
					tilesVisited.push(adj);
					stack.push(adj);
					accum[index] = accum[index] ? [...accum[index], temp] : [temp];
				}
			}
		}
		return accum;
	}, {});

	// for (let tile in connectedTiles) {
	// 	if (!tilesVisited.includes(tile)) {
	// 		console.log(connectedTiles[tile]);
	// 	}
	// }
	// console.log(connectedTiles);
	return true;
}

// { 0: [ '0,0', '1,0', '1,0', '2,0' ],
//   1: [ '0,5', '0,6' ],
//   4: [ '1,2', '2,2' ],
//   5: [ '1,8', '2,8' ],
//   8: [ '2,4', '2,5', '2,5' ],
//   13: [ '4,8' ],
//   14: [ '5,4', '5,5', '5,5' ],
//   17: [ '6,8' ],
//   18: [ '7,3' ],
//   19: [ '8,7' ] }

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
