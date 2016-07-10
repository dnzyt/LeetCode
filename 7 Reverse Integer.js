/*
Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321 
*/

var reverse = function (x) {
	let flag = x > 0 ? 1 : -1;
    x = Math.abs(x);
   	let res = 0;
	while (x !== 0) {
		let temp = res * 10 + x % 10;
		if (Math.floor(temp / 10) !== res) {
			res = 0;
			break;
		}
		res = temp;
		x = Math.floor(x / 10);
	}
	
	//查看是否溢出
	if (res > Math.pow(2,31) - 1) { 
        return 0; 
    } 


	return res * flag;
}