/*
Given numRows, generate the first numRows of Pascal's triangle.

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

a[n] = a[n - 1] + a[n]

行号与每一行的末尾index相等
*/

var generate = function(numRows) {
	let res = [];
	for (let i = 0; i < numRows; i++) {
		let temp = [1];
		for (let j = 1; j <= i; j++) {
			if (j === i) {
				temp.push(1);
			} else {
				let pre = res[i - 1];
				temp.push(pre[j - 1] + pre[j]);
			}
		}
		res.push(temp);
	}
	return res;
}