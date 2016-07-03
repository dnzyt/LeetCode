/*
Given an array of size n, find the majority element. The majority element is the element that appears more than |n/2| times.
*/

var majorityElement = function (nums) {
	let mapping = {};
	for (let num of nums) {
		if (mapping[num.toString()] === undefined) {
			mapping[num.toString()] = 1;
		} else {
			mapping[num.toString()] += 1;
		}
	}
	for (let property in mapping) {
		if (mapping.hasOwnProperty(property) && mapping[property] >= nums.length / 2) {
			return parseInt(property);
		}
	}
	return 0;
}