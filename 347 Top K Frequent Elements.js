/*
Given a non-empty array of integers, return the k most frequent elemnts.
*/

var topFrequent = function (nums, k) {
	let mapping = {};
    for (let num of nums) {
        if (mapping[num] === undefined) {
            mapping[num] = 1;
        } else {
            mapping[num]++;
        }
    }
    
    let arr = [];
    for (let key in mapping) {
        let obj = {"key": key, "count": mapping[key]};
        arr.push(obj);
    }
    
    function comp(a, b) {
        return a.count < b.count ? 1 : -1;
    }
    
    arr.sort(comp);
    
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(parseInt(arr[i].key));
    }
    return res;
}