function f_gold(nums1, nums2) {
    var m = {};
    var stk = [];
    for (var v of nums2) {
        while (stk.length > 0 && stk[stk.length - 1] < v) {
            m[stk.pop()] = v;
        }
        stk.push(v);
    }
    return nums1.map(v => m[v] || -1);
}

