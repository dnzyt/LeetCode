/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var helper = function (digits, start, res, arr, mapping) {
    if (start === digits.length) {
        res.push(arr.join(''));
        return;
    }
    let temp = mapping[digits.charAt(start)];
    for (let c of temp) {
        arr.push(c);
        helper(digits, start + 1, res, arr, mapping);
        arr.pop();
    }
}

var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    let mapping = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
        "0": " "
    }

    let res = [];
    let arr = [];
    helper(digits, 0, res, arr, mapping);

    return res;
}
