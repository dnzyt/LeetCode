/*
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

var strStr = function (haystack, needle) {
	if (!haystack && !needle) {
		return 0;
	}
	
	if (!haystack) {
	    return -1;
	}
	if (!needle || needle.length === 0) {
	    return 0;
	}
	
	
	if (haystack.length < needle.length) {
		return -1;
	}

	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		let j = 0;
		for (j = 0; j < needle.length; j++) {
			if (needle.charAt(j) !== haystack.charAt(i + j)) {
				break;
			}
		}
		if (j === needle.length) {
			return i;
		}
	}

	return -1;
}

