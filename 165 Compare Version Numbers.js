/*
Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
*/

var compareVersion = function (version1, version2) {
	let arr1 = version1.split('.');
	let arr2 = version2.split('.');

	let index = 0;
	
	while(parseInt(arr1[arr1.length - 1]) === 0) {
	    arr1.pop();
	}
	
	while(parseInt(arr2[arr2.length - 1]) === 0) {
	    arr2.pop();
	}
	
	while (index < arr1.length && index < arr2.length) {
		if (parseInt(arr1[index]) < parseInt(arr2[index])) {
			return -1
		} else if (parseInt(arr1[index]) > parseInt(arr2[index])) {
			return 1;
		} else {
		    index++;
			continue;
		}
	}
	if (arr1.length === arr2.length) {
		return 0;
	}
	return arr1.length > arr2.length ? 1 : -1;
}