/*
Given two arrays, write a function to compute their intersection.
*/

var intersect = function (nums1, nums2) {
	let mapping = {}
	let ans = [];
	for (let value of nums1) {
		if (mapping[value.toString()] === undefined) {
			mapping[value.toString()] = 1;
		} else {
			mapping[value.toString()]++;
		}
	}
	for (let value of nums2) {
		if (mapping[value.toString()] === undefined) {
			continue;
		} else {
			ans.push(value);
			mapping[value.toString()]--;
			if (mapping[value.toString()] === 0) {
			    delete mapping[value.toString()];
			}
		}
	}
	return ans;
}