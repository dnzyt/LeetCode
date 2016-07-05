/*
Determine whether an integer is a palindrome. Do this without extra space.
*/



var isPalindrome = function (x) {
	let s = x.toString();
	let arr = s.split('');
	let head = 0;
	let end = arr.length - 1;

	while (head < end) {
		if (arr[head] !== arr[end]) {
			return false;
		}
		head++;
		end--;
	}
	return true;
}