/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:
Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3

Return: [1,2],[1,4],[1,6]

The first 3 pairs are returned from the sequence:
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:
Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2

Return: [1,1],[1,1]

The first 2 pairs are returned from the sequence:
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
Example 3:
Given nums1 = [1,2], nums2 = [3],  k = 3 

Return: [1,3],[2,3]

All possible pairs are returned from the sequence:
[1,3],[2,3]
 */

/*
需要一个index数组来记录nums1中的每一位走到了nums2中的什么位置
在初始时刻，nums1中的每一位在nums2中的位置都是0,随着不断的找到最小值，nums1中的数字在nums2中的对应位置会后移，这个时候需要index[idx]++
例如找到第一个最小值之后，nums1[0]已经和nums2[0]组合过了，所以这个时候index[0]就要++,但是nums[1~最后]还没有和nums2中的数字组合过，所以index[1~最后]还都等于0

 */

var kSmallestPairs = function(nums1, nums2, k) {
    let res = [];
    let size = Math.min(k, nums1.length * nums2.length);

    let index = new Array(nums1.length).fill(0);
    for (let i = 0; i < size; i++) {
        let idx = 0;
        let sum = Number.MAX_VALUE;
        for (let j = 0; j < nums1.length; j++) {
            if (index[j] < nums2.length && sum >= nums1[j] + nums2[index[j]]) {
                sum = nums1[j] + nums2[index[j]];
                idx = j;
            }
        }
        res.push([nums1[idx], nums2[index[idx]]]);
        index[idx]++;
    }
    return res;
}
