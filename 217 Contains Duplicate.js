/*
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

var containsDuplicate = function (nums) {
	let mapping = {}
	for (let num of nums) {
		if (mapping[num.toString()] === undefined) {
			mapping[num.toString()] = 1;
		} else {
			return true;
		}
	}
	return false;
}