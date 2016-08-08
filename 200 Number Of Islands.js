/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3
*/

var markZero = function (grid, x, y) {
    grid[x][y] = '0';
    if (x > 0 && grid[x - 1][y] === '1') {
        markZero(grid, x - 1, y);
    }
    if (x < grid.length - 1 && grid[x + 1][y] === '1') {
        markZero(grid, x + 1, y);
    }

    if (y > 0 && grid[x][y - 1] === '1') {
        markZero(grid, x, y - 1);
    }
    if (y < grid[0].length - 1 && grid[x][y + 1] === '1') {
        markZero(grid, x, y + 1);
    }
}

var numIslands = function (grid) {
    let res = 0;
    if (grid.length === 0) {
        return res;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                markZero(grid, i, j);
                res++;
            }
        }
    }

    return res;
}
