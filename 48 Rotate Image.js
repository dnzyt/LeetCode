/*
You are given an n * n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
*/

var rotate = function (matrix) {
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        let newLen = matrix.length - 2 * i;
        for (let j = 0; j < newLen - 1; j++) {
            let temp = matrix[i][i + j];
            // top left
            matrix[i][i + j] = matrix[i + newLen - 1 - j][i];
            // bottom left
            matrix[i + newLen - 1 - j][i] = matrix[i + newLen - 1][i + newLen - 1 - j];
            // bottom right
            matrix[i + newLen - 1][i + newLen - 1 - j] = matrix[i + j][i + newLen - 1];
            // top right
            matrix[i + j][i + newLen - 1] = temp;
        }
    }
}
