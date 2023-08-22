function f_gold(nums, target) {
    nums.sort();
    var ans = 0;
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        var j = i + 1;
        var k = n - 1;
        while (j < k) {
            var s = nums[i] + nums[j] + nums[k];
            if (s >= target) {
                k -= 1;
            }
            else {
                ans += k - j;
                j += 1;
            }
        }
    }
    return ans;
}

