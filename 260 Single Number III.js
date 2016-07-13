/*
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
*/

var singleNumber = function (nums) {
	let xor = 0;
	for (let v of nums) {
		xor ^= v;
	}
	let lastBit = xor & (~(xor - 1))

	let r1 = 0;
	let r2 = 0;
	for (let v of nums) {
		if ((lastBit & v) === 0) {
			r1 ^= v;
		} else {
			r2 ^= v;
		}
	}

	return [r1, r2];
}