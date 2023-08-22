function f_gold(nums1, nums2) {
    var s1 = new Set(nums1);
    var s2 = new Set(nums2);
    return [Array.from(s1 - s2), Array.from(s2 - s1)];
}

