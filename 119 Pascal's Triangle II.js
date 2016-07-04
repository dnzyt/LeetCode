/*
Given an index k, return the kth row of the Pascal's triangle.
For example, given k = 3.
Return [1, 3, 3, 1]
*/

/*
[
	[1],
	[1,1],
	[1,2,1],
	[1,3,3,1],
	[1,4,6,4,1]
]

a[n] = a[n - 1] + a[n]
*/

var getRow = function (rowIndex) {
	let res = [1];
	for (let i = 1; i <= rowIndex; i++) {
		
		//这里需要从后往前
		for (let j = i; j > 0; j--) {
			if (j === i) {
				res.push(1);
				continue;
			}
			res[j] = res[j - 1] + res[j];
		}
	}

	return res;
}