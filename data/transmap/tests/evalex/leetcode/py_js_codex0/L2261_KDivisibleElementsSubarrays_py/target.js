function f_gold(nums, k, p) {
    var n = nums.length;
    var s = new Set();
    for (var i = 0; i < n; i++) {
        var cnt = 0;
        var t = "";
        for (var j = i; j < n; j++) {
            if (nums[j] % p == 0) {
                cnt += 1;
            }
            if (cnt <= k) {
                t += nums[j] + ",";
                s.add(t);
            }
            else {
                break;
            }
        }
    }
    return s.size;
}

