/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/*
Next permutation 是一个经典的算法题，在C++ std中有这个函数

四步可以取得next permutation:
1. 找到最大的index k, 使A[k] < A[k + 1], 如果不存在，说明当前数已经是最大的，那么直接sort这个array就可以得到结果
2. 找到最大的index x,使A[k] < A[x]
3. 交换A[k], A[x]
4. 翻转从k+1到最后

*/

var nextPermutation = function (nums) {
    if (nums.length === 0 || nums.length === 1) {
        return;
    }

    let k = nums.length - 1;
    while (k >= 0) {
        if (k === 0) {
            nums.sort(function (a, b) {
                return a - b;
            })
            return;
        }
        if (nums[k] > nums[k - 1]) {
            k--;
            break;
        }
        k--;
    }


    let x = -1;
    for (let i = k + 1; i < nums.length; i++) {
        if (nums[k] < nums[i]) {
            x = i;
        }
    }

    let temp = nums[k];
    nums[k] = nums[x];
    nums[x] = temp;

    let left = k + 1;
    let right = nums.length - 1;
    while (left < = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }

}
