/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/


var uniquePaths = function (m, n) {
	var res = new Array(m);
	res.fill(1);

	for (let i = 1; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (j === 0) {
				continue;
			} else {
				res[j] = res[j] + res[j - 1];
			}
		}
	}

	return res[m - 1];
}