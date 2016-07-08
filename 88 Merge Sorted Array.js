/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
*/

var merge = function (nums1, m, nums2, n) {
	let tail = m + n - 1;
	let one = m - 1;
	let two = n - 1;
	while (one > -1 && two > -1) {
		if (nums1[one] >= nums2[two]) {
			nums1[tail--] = nums1[one--];
		} else {
			nums1[tail--] = nums2[two--];
		}
	}
	while (one > -1) {
		nums1[tail--] = nums1[one--];
	}

	while (two > -1) {
		nums1[tail--] = nums2[two--];
	}



	return;
}