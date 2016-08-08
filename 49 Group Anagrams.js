/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/

var groupAnagrams = function (strs) {
    let res = [];
    let mapping = {};
    if (!strs || strs.length === 0) {
        return res;
    }

    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (mapping[key]) {
            mapping[key].push(str);
        } else {
            let temp = [str];
            mapping[key] = temp;
        }
    }

    for (let k in mapping) {
        res.push(mapping[k]);
    }

    return res;
}
