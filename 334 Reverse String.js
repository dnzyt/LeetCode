/*
Write a function that takes a string as input and returns the string reversed.
*/

var reversedString = function(s) {
	if(!s) {
		return s;
	}

	return s.split('').reverse().join('');
}