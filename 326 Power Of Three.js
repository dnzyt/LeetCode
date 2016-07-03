/*
Given an integer, write a function to determine if it is a power of three.
*/

// Use Math.log() to get the logarithm

var isPowerOfThree = function (n) {
	return n <= 0 ? false : n === Math.pow(3, Math.round(Math.log(n) / Math.log(3)))
}