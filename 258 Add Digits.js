/*
	Givin a non-negative integer num, repeatedly add all its digits until the result has only one digit.
*/

/*
1 0 => 1
1 1 => 2
1 2 => 3
1 3 => 4
1 4 => 5
1 5 => 6
1 6 => 7
1 7 => 8
1 8 => 9
1 9 => 1
2 0 => 2
2 1 => 3  
*/

var addDigits = function(num) {
	return (num - 1) % 9 + 1;
}