/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.
*/

/*
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB 
...
52 -> AZ
53 -> BA
*/

var convertToTitle = function (n) {
	let mapping = {
		'1': 'A',
		'2': 'B',
		'3': 'C',
		'4': 'D',
		'5': 'E',
		'6': 'F',
		'7': 'G',
		'8': 'H',
		'9': 'I',
		'10': 'J',
		'11': 'K',
		'12': 'L',
		'13': 'M',
		'14': 'N',
		'15': 'O',
		'16': 'P',
		'17': 'Q',
		'18': 'R',
		'19': 'S',
		'20': 'T',
		'21': 'U',
		'22': 'V',
		'23': 'W',
		'24': 'X',
		'25': 'Y',
		'26': 'Z'
	};
	let res = '';
	while (n !== 0) {
		let rem = (n - 1) % 26 + 1; //进制换算时，求余数和商用这个加一减一的形式
		res = mapping[rem.toString()] + res;
		n = Math.floor((n - 1) / 26);
	}

	return res;
}