/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.
*/

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    let grid = [];
    for (let i = 0; i < obstacleGrid.length; i++) {
        grid.push(new Array(obstacleGrid[0].length).fill(-1));
    }
    grid[0][0] = 1;
    for (let i = 1; i < obstacleGrid[0].length; i++) {
        grid[0][i] = grid[0][i - 1] > 0 && obstacleGrid[0][i] !== 1 ? 1 : 0;
    }
    for (let j = 1; j < obstacleGrid.length; j++) {
        grid[j][0] = grid[j - 1][0] > 0 && obstacleGrid[j][0] !== 1 ? 1 : 0;
    }

    for (let i = 1; i < obstacleGrid.length; i++) {
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] === 1) {
                grid[i][j] = 0;
                continue;
            }
            if (grid[i - 1][j] === 0 && grid[i][j - 1] === 0) {
                grid[i][j] = 0;
                continue;
            }
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }

    return grid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];

}
