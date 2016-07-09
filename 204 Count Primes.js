/*
Count the number of prime numbers less than a non-negative number n.
*/

/*
0 - unvisited
1 - prime
2 - non-prime
*/

var countPrimes = function (n) {
	let count = 0;
	let dict = [];
	for (let i = 2; i <= Math.sqrt(n); i++) {
		for (let j = 2; j * i <= n; j++) {
			dict[i * j] = false;
		}
	}
	for (let i = 2; i < n; i++) {
		if (dict[i] === undefined) {
			count++;
		}
	}

	return count;


}