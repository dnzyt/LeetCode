/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// a[n] = a[n - 1] + a[n - 2]

var climbStairs = function (n) {
	let a = [1, 2];
	for (let i = 2; i < n; i++) {
		a[i] = a[i - 1] + a[i - 2];
	}
	return a[n - 1];
}