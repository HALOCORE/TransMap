
function f_gold(nums1, nums2) {
    function f(nums1, nums2) {
        var d = [a - b for a, b in zip(nums1, nums2)];
        var t = mx = d[0];
        for (var v in d[1:]) {
            if (t > 0) {
                t += v;
            }
            else {
                t = v;
            }
            mx = max(mx, t);
        }
        return mx;
    }
    var s1, s2 = sum(nums1), sum(nums2);
    return max(s2 + f(nums1, nums2), s1 + f(nums2, nums1));
}

