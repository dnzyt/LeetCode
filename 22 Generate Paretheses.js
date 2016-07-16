/*
Given n pairs of parenthesis, write a function to generate all combination of well-formed parenthesis.
*/

var parenthesis = function (arr, paren, left, right) {
	if (right === 0) {
		arr.push(paren);
		return;
	}
	if (left > 0) {
		parenthesis(arr, paren + '(', left - 1, right);
	}

	if (right > 0 && right > left) {
		parenthesis(arr, paren + ')', left, right - 1);
	}
}


var generateParenthesis = function (n) {
	let arr = [];

	parenthesis(arr, '', n, n);
	return arr;
}