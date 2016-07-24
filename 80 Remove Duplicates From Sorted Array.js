/*
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.
*/

var removeDuplicates = function (nums) {
    let start = 0;
    let pointer = 0;
    let count = 1;

    for (pointer = 1; pointer < nums.length; pointer++) {
        if (nums[pointer] !== nums[start]) {
            start++;
            nums[start] = nums[pointer];
            count = 1;
            continue;
        } else {
            if (count === 1) {
                count = 2;
                start++;
                nums[start] = nums[pointer];
                continue;
            }
        }
    }
    return start + 1;
}
