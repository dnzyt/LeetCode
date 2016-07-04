/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/

/*
JavaScript integer division and remainder:
var div = Math.floor(y / x);
var rem = y % x;
*/

var plusOne = function (digits) {
	if (!digits || digits.length === 0) {
		return [1];
	}
	let carret = 0;
	digits.reverse();
	digits.forEach(function(currentValue, index, array) {
		if (index === 0) {
			let v = currentValue + carret + 1;
			carret = Math.floor(v / 10);
			array[index] = v % 10;
		} else {
			let v = currentValue + carret;
			carret = Math.floor(v / 10);
			array[index] = v % 10;
		}
	});
	if (carret !== 0) {
		digits.push(carret);
	}
	digits.reverse();
	return digits;
}