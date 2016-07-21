/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
*/

var minPathSum = function(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    if (grid.length === 1 && grid[0].length === 1) {
        return grid[0][0];
    }
    
    
    let res = [];
    for (let i = 0; i < grid.length; i++) {
        res.push(new Array(grid[0].length).fill(0));
    }
    let temp = 0;
    for (let i = 0; i < grid[0].length; i++) {
        temp += grid[0][i];
        res[0][i] = temp;
    }
    temp = 0;
    for (let i = 0; i < grid.length; i++) {
        temp += grid[i][0];
        res[i][0] = temp;
    }
    
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
        }
    }
    
    return res[grid.length - 1][grid[0].length - 1];
    
};