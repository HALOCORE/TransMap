function f_gold(nums1, nums2) {
    var counter = new Map();
    for (var i = 0; i < nums1.length; i++) {
        if (counter.has(nums1[i])) {
            counter.set(nums1[i], counter.get(nums1[i]) + 1);
        } else {
            counter.set(nums1[i], 1);
        }
    }
    var res = [];
    for (var i = 0; i < nums2.length; i++) {
        if (counter.has(nums2[i]) && counter.get(nums2[i]) > 0) {
            res.push(nums2[i]);
            counter.set(nums2[i], counter.get(nums2[i]) - 1);
        }
    }
    return res;
}

