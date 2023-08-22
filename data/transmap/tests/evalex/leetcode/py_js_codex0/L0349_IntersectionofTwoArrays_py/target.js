function f_gold(nums1, nums2) {
    var s = new Set(nums1);
    var res = new Set();
    for (var num of nums2) {
        if (s.has(num)) {
            res.add(num);
        }
    }
    return Array.from(res);
}

