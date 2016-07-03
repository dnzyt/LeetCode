/*
Given an integer, write a function to determine if it is a power of two.
*/

var isPowerOfTwo = function (n) {
	return n <= 0 ? false : n === Math.pow(2, Math.round(Math.log(n) / Math.log(2)))
}