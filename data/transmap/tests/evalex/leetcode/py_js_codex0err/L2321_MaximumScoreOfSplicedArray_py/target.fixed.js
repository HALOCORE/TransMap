
function f_gold(nums1, nums2) {
    function f(nums1, nums2) {
        var d = nums1.map((a, i) => a - nums2[i]);
        var t = d[0], mx = d[0];
        for (var v of d.slice(1)) {
            if (t > 0) {
                t += v;
            }
            else {
                t = v;
            }
            mx = Math.max(mx, t);
        }
        return mx;
    }
    var s1 = nums1.reduce(function(a, b) {
        return a + b;
    });
    var s2 = nums2.reduce(function(a, b) {
        return a + b;
    });
    return Math.max(s2 + f(nums1, nums2), s1 + f(nums2, nums1));
}

