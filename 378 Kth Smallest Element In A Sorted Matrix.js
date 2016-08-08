/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n2.
*/

/*
这种找位置的题要想到用二分查找
*/

var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n-1][n-1];

    while (left < right) {
        let midv = Math.floor((left + right) / 2);

        let count = 0;  // number of elements no bigger than midv
        for (let i = 0; i < n; i++) {
            if (matrix[i][matrix[0].length - 1] < midv) {
                count += matrix[0].length;
            } else {
                for (let j = 0; j < matrix[0].length; j++) {
                    if (matrix[i][j] <= midv) {
                        count++;
                    } else {
                        break;
                    }
                }
            }
        }

        if (count < k) {
            left = midv + 1;
        } else {
            right = midv;
        }
    }
    return left;
}
