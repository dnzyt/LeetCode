/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

var maxProfit = function (prices) {
	if (!prices || prices.length === 0) {
		return 0;
	}

	let lowest = prices[0];
	let highest = prices[0];
	let difference = 0;
	for (let pri of prices) {
		if (pri < lowest) {
			difference = Math.max(difference, highest - lowest);
			lowest = pri;
			highest = pri;
			continue;
		}

		if (pri > highest) {
			highest = pri;
			difference = Math.max(difference, highest - lowest);
			continue;
		}
	}
	return difference;
}