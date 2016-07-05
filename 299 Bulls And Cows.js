var getHint = function (secret, guess) {
	let ss = secret.toString().split('');
	let sg = guess.toString().split('');

	let mapping = {};



	let a = 0;
	let b = 0;

	for (let i = 0; i < ss.length; i++) {
		if (ss[i] === sg[i]) {
			a++;
			ss.splice(i, 1);
			sg.splice(i, 1);
			i--;
		}
	}

	for (let i = 0; i < ss.length; i++) {
		if (mapping[ss[i]] === undefined) {
			mapping[ss[i]] = 1;
		} else {
			mapping[ss[i]]++;
		}
	}

	for (let i = 0; i < sg.length; i++) {
		if (mapping[sg[i]] !== undefined) {
			b++;
			mapping[sg[i]]--;
			if (mapping[sg[i]] === 0) {
				delete mapping[sg[i]];
			}
		}
	}

	return '' + a + 'A' + b + 'B';
}