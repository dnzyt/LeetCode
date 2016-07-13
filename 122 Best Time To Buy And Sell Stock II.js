/*
Say you have an array for which the ith element is the price of a gien stock on day i.
Design an algorithm to find the maximum profit.
*/

var maxProfit = function (prices) {
	if (prices.length === 0) {
        return 0;
    }
    let profit = 0;
    let low = prices[0];
    let high = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (high < prices[i]) {
            high = prices[i];
            continue;
        } else if (high > prices[i]) {
            profit += (high - low);
            low = prices[i];
            high = prices[i];
        }
    }
    profit += (high - low);
    
    return profit;
}