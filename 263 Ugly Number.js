/*
Write a program to check whether a given number is an ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
*/

var isUgly = function (num) {
	if (num === 1) {
		return true;
	}
	if (num === 0) {
		return false;
	}
	while (num !== 1) {
		if (num % 2 === 0) {
			num = num / 2;
			continue;
		}

		if (num % 3 === 0) {
			num = num / 3;
			continue;
		}

		if (num % 5 === 0) {
			num = num / 5;
			continue;
		}

		return false;
	}

	return true;
}