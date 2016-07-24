/*
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?
*/

var hIndex = function(citations) {
    let left = 0;
    let right = citations.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (citations.length - mid > citations[mid]) {
            left = mid + 1;
            continue;
        }
        if (citations.length - mid < citations[mid]) {
            right = mid - 1;
            continue;
        }
        return citations.length - mid;
    }
    return citations.length - left;
};
