/*
Given two binary strings, return their sum.
*/

var addBinary = function (a, b) {
	if (!a || a.length === 0) {
		return b;
	}

	if (!b || b.length === 0) {
		return a;
	}

	let res = '';

	if (a.length > b.length) {
		let temp = a;
		a = b;
		b = temp;
	}

	let carret = 0;
	for (let i = a.length - 1; i >= 0; i--) {
		let v = (parseInt(a[i]) + parseInt(b[b.length - a.length + i]) + carret) % 2;
		carret = Math.floor((parseInt(a[i]) + parseInt(b[b.length - a.length + i]) + carret) / 2);
		res = '' + v + res; 
	}
	for (let i = b.length - a.length - 1; i >= 0; i--) {
		let v = (parseInt(b[i]) + carret) % 2;
		carret = Math.floor((parseInt(b[i]) + carret) / 2);
		res = '' + v + res;
	}
	if (carret !== 0) {
		res = '' + carret + res;
	}

	return res;

}