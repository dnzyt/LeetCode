/*
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.
*/

/*
对于一个数n，它的灯泡状态取决于n是否是完全平方数
例如 18， 在第1,2,3,6,9,18次遍历的时候会改变灯泡的状态，对于一个班的非完全平方数，遍历完成都会把灯泡状态还原，
因为乘数因子是对称的，只有完全平方数会改变灯泡的状态，因为完全平方数的因子相同，例如36，因子为1,2,3,4,“6”,8,12,18,36,
所以问题就转化为小于等于n的数中有多少个完全平方数
*/

var bulbSwitch = function (n) {
	return Math.floor(Math.sqrt(n));
}

