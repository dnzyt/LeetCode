/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.

However, when you guess a particular number x, and you guess wrong, you pay $x. You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.
*/
/*
当每次选取一个值后，目标值有可能落在该值的左边或者右边，不管落在左边或者右边，如果想确保目标值被找到，那么就应该做最坏打算，也就是说每次都选左边和右边中的最大值
dp[L][R]表示在L到R区间能，找到目标值所需要的最小金钱数
所以当说出一个数i时，那么找到目标值所需要的金钱数为i + max(dp[L][i - 1], dp[i + 1][R]
*/

var helper = function(dp, start, end) {
    if (start >= end) {
        return 0;
    }

    if (dp[start][end] < Number.MAX_SAFE_INTEGER) {
        return dp[start][end];
    }

    for (let i = start; i <= end; i++) {
        dp[start][end] = Math.min(dp[start][end], i + Math.max(helper(dp, start, i - 1), helper(dp, i + 1, end)));
    }
    return dp[start][end];
}

var getMoneyAmount = function (n) {
    let dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(n + 1).fill(Number.MAX_SAFE_INTEGER));
    }
    return helper(dp, 1, n);
}
