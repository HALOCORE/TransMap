function f_gold(nums1, nums2) {
    var ans = 0;
    var n = nums2.length;
    for (var i = 0; i < nums1.length; i++) {
        var left = i;
        var right = n - 1;
        while (left < right) {
            var mid = (left + right + 1) >> 1;
            if (nums2[mid] >= nums1[i]) {
                left = mid;
            }
            else {
                right = mid - 1;
            }
        }
        ans = Math.max(ans, left - i);
    }
    return ans;
}

