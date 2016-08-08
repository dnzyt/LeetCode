/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.
*/

/*
这题很难想，要利用好题目给出的束缚条件:
1.如果存在这样的起点，那么只有唯一的一个
2.如果没有返回-1

在某一个区间中，从i相加直到k， 如果之前和都为正值，到k和变为负值，说明在i到k之间不可能存在起点 (这里不容易想到，做一些额外说明: 在k前面的任何一点都会给后面的结果贡献正值，所以如果到k为负值，说明从之前任何一点开始到k的和都不可能为正值)，这时我们需要把和清零，然后重复上述过程，如果和一直都为正值，那么i就是这个起点
*/

var canCompleteCircuit = function (gas, cost) {
    let diff = [];
    for (let i = 0; i < gas.length; i++) {
        diff.push(gas[i] - cost[i]);
    }

    let total = 0;
    let res = 0;
    let sum = 0;
    for (let i = 0; i < diff.length; i++) {
        sum += diff[i];
        total += diff[i];
        if (sum < 0) {
            sum = 0;
            res = i + 1;
        }
    }

    if (total < 0) {
        return -1;
    }

    return res;
}
