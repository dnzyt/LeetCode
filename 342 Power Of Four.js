var isPowerOfFour = function (num) {
	return num <= 0 ? false : num === Math.pow(4, Math.round(Math.log(num) / Math.log(4)));
}