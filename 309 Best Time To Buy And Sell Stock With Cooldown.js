/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
*/



var maxProfit = function (prices) {
	let sells = [0];
	let buys = [-prices[0]];
	sells.push(prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0);
	buys.push(-prices[1]);

	for (let i = 2; i < prices.length; i++) {
		let delta = prices[i] - prices[i - 1];
		sells.push(Math.max(sells[i - 1] + delta, buys[i - 1] + prices[i]));
		buys.push(Math.max(sells[i - 2] - prices[i], buys[i - 1] - delta)); 
	}

	let maximum = 0;
	for (let v of sells) {
		maximum = Math.max(maximum, v);
	}

	return maximum;
}