function f_gold(nums) {
    var ans = 0;
    var n = nums.length;
    var counter = {};
    for (var b = n - 3; b > 0; b--) {
        var c = b + 1;
        for (var d = c + 1; d < n; d++) {
            if (counter[nums[d] - nums[c]] === undefined) {
                counter[nums[d] - nums[c]] = 1;
            }
            else {
                counter[nums[d] - nums[c]]++;
            }
        }
        for (var a = 0; a < b; a++) {
            if (counter[nums[a] + nums[b]] === undefined) {
                ans += 0;
            }
            else {
                ans += counter[nums[a] + nums[b]];
            }
        }
    }
    return ans;
}

