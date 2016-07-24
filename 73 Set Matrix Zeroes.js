/*
Given a m * n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
*/

/*
用第0行和第0列来存放置位信息
*/

var setZeroes = function (matrix) {
    let horizontal = false;
    let vertical = false;
    if (matrix[0][0] === 0) {
        horizontal = true;
        vertical = true;
    }


    if (matrix[0][0] !== 0) {
        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][0] === 0) {
                vertical = true;
                break;
            }
        }
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[0][j] === 0) {
                horizontal = true;
                break;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let j = 1; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    if (vertical) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }

    }
    if (horizontal) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0;
        }
    }
}
