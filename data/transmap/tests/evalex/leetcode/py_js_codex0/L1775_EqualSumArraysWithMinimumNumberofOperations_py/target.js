function f_gold(nums1, nums2) {
    var s1 = nums1.reduce((a, b) => a + b, 0);
    var s2 = nums2.reduce((a, b) => a + b, 0);
    if (s1 == s2) {
        return 0;
    }
    if (s1 > s2) {
        return f_gold(nums2, nums1);
    }
    var freq = [0, 0, 0, 0, 0, 0];
    for (var x of nums1) {
        freq[6 - x] += 1;
    }
    for (var x of nums2) {
        freq[x - 1] += 1;
    }
    var diff = s2 - s1;
    var ans = 0;
    var i = 5;
    while (i > 0 && diff > 0) {
        while (freq[i] && diff > 0) {
            diff -= i;
            freq[i] -= 1;
            ans += 1;
        }
        i -= 1;
    }
    return diff > 0 ? -1 : ans;
}

