/*
Reverse bits of a given 32 bits unsigned integer.
*/

var reverseBits = function (n) {
	int reversed = 0;
	for (let i = 0; i < 32; i++) {
		reversed = (reversed << 1) | (n & 1);
		n = n >> 1;
	}
	// '>>' or '<<' will convert unsigned to signed integer.
	return reversed >>> 0; // >>> convert signed to unsigned-32 bit integer
}