/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.
 */

/*
求重数的一道典型题
首先要思考到的是满足条件的数最多只可能有两个
选出两个备选的数字，选择的过程就是不断的增加，抵消，再增加(与当前数字相同)，再抵消(与当前数字不同)
两个备选数字拿到后，验证出现次数是否大于 n / 3
 */

var majorityElement = function(nums) {
    let res = [];
    let m = 0;
    let n = 0;
    let count_m = 0;
    let count_n = 0;
    for (let v of nums) {
        if (v === m) {
            count_m++;
        } else if (v === n) {
            count_n++
        } else if (count_m === 0) {
            m = v;
            count_m = 1;
        } else if (count_n === 0) {
            n = v;
            count_n = 1;
        } else {
            count_m--;
            count_n--;
        }
    }

    count_m = 0;
    count_n = 0;
    for (let v of nums) {
        if (v === m) {
            count_m++;
        } else if (v === n) {
            count_n++;
        }
    }

    if (count_m > (nums.length / 3)) {
        res.push(m);
    }
    if (count_n > (nums.length / 3)) {
        res.push(n);
    }
    return res;

}
