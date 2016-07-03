/*
Write a function that takes a string as input and reverse only the vowels of a string.
*/

var reverseVowels = function (s) {
	if (!s || s.length === 1) {
		return s;
	}

	let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

	let arr = s.split('');
	let head = 0;
	let tail = arr.length - 1;

	while (head < tail) {
		while (!vowels.has(arr[head]) && head < s.length) {
			head++;
			continue;
		} 

		while (!vowels.has(arr[tail]) && tail >= 0) {
			tail--;
			continue;
		}

		if (head < tail) {
			let temp = arr[head];
			arr[head] = arr[tail];
			arr[tail] = temp;
			head++;
			tail--;
		}
	}

	return arr.join('');
}