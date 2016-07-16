/*
Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0 .
*/

var maxProduct = function (words) {
	let res = 0;
	let masks = [];
	for (let i = 0; i < words.length; i++) {
		let mask = 0;
		for (let letter of words[i]) {
			mask |= (1 << (letter.charCodeAt(0) - 97));
		}
		masks.push(mask);

		for (let j = 0; j < i; j++) {
			if ((masks[i] & masks[j]) === 0) {
				res = Math.max(res, words[i].length * words[j].length);
			}
		}
	}
	return res;
}