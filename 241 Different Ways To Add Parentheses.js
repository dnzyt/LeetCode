/*
Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.
*/

/*
分治法，当遇到符号位的时候，分为左边所有情况和右边所有情况相 +/-/*
*/


var diffWaysToCompute = function (input) {
	let res = [];
	if (!input || input.length === 0) {
		return res;
	}

	for (let i = 0; i < input.length; i++) {
		if (input[i] !== '+' && input[i] !== '-' && input[i] !== '*') {
			continue;
		}

		let l = diffWaysToCompute(input.substring(0, i));
		let r = diffWaysToCompute(input.substring(i + 1));

		for (let vl of l) {
			for (let vr of r) {
				if (input.charAt(i) === '+') {
					res.push(vl + vr);
				} else if (input.charAt(i) === '-') {
					res.push(vl - vr);
				} else if (input.charAt(i) === '*') {
					res.push(vl * vr);
				}
			}
		}
	}

	if (res.length === 0) {
		res.push(parseInt(input));
	}
	return res;

}