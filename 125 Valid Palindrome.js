/*
Given a string, determine if it is padindrome, considering only alphanumeric characters and ignoring cases.
*/

var isAlphanumeric = function (s) {
	let code = s.charCodeAt(0);
	if((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
		return true;
	}
	return false;

}

var isPalindrome = function (s) {
	if (s.trim().length === 0) {
        return true;
    }
    let i = 0;
	let j = s.length - 1;
	while (i <= j) {
		while (i < s.length && !isAlphanumeric(s.charAt(i))) {
			i++;
		}
		while (j >= 0 && !isAlphanumeric(s.charAt(j))) {
			j--;
		}
        if (i >= j) {
            return true;
        }

		if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}