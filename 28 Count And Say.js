/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...
*/

var countAndSay = function (n) {
	let count = 0;
	let s = '1';
	let seq = ['1'];
	for (let i = 1; i < n; i++) {
		let temp = seq[seq.length - 1];
		let res = '';
		count = 0;
		s = '';
		for (let val of temp) {
			if (s.length === 0) {
				s = val;
				count++;
				continue;
			}
			if (val === s) {
				count++;
			} else {
				res = res + count + s;
				s = val;
				count = 1;
			}
		}
		res = res + count + s;
		seq.push(res);
	}

	return seq[seq.length - 1];
}
