function f_gold(nums1, nums2) {
    nums1.sort();
    nums2.sort();
    var n = nums1.length;
    var res = 0;
    for (var i = 0; i < n; i++) {
        res += nums1[i] * nums2[n - i - 1];
    }
    return res;
}

