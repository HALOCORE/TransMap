function f_gold(nums1, nums2, nums3) {
    var s1 = new Set(nums1);
    var s2 = new Set(nums2);
    var s3 = new Set(nums3);
    var ans = [];
    for (var i = 1; i < 101; i++) {
        var a = s1.has(i);
        var b = s2.has(i);
        var c = s3.has(i);
        if (a + b + c > 1) {
            ans.push(i);
        }
    }
    return ans;
}

