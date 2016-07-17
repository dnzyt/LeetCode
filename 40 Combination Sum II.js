/*
Given a collection of candidate numbers C and a target number T, find all unique combinations in C where the candidates numbers sums to T.

Each number in C may only be used once in the combination.
*/


/*
先把数组排序，然后对重复元素只做一些递归，递归之后跳过重复元素，到达一个新元素再次递归
*/

var helper = function (candidates, target, res, arr, start) {
	if (target === 0) {
		res.push(arr.slice());
		return;
	}

	for (let i = start; i < candidates.length; i++) {
		if (candidates[i] <= target) {
			arr.push(candikdates[i]);
			helper(candidates, target - candidates[i], res, arr, i + 1);
			arr.pop();
			while (i < candidates.length && candidates[i] === candidates[i + 1]) {
				i++;
			}
		}
	}


}


var combinationSum2 = function (candidates, target) {

	let res = [];
	let arr = [];
	candidates.sort();
	helper(candidates, target, res, arr, 0);
	return res;


	
};


