/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]
*/

var isPalindrome = function (word) {
    let re = word.split('').reverse().join('');
    return re === word;
}

var helper = function (s, res, arr, start) {
    if (start === s.length) {
        res.push(arr.slice());
        return;
    }
    for (let i = start + 1; i <= s.length; i++) {
        let sub = s.substring(start, i);
        if (isPalindrome(sub)) {
            arr.push(sub.slice());
            helper(s, res, arr, i);
            arr.pop();
        }
    }
}

var partition = function (s) {
    let res = [];
    let arr = [];
    helper(s, res, arr, 0);
    return res;
}
