function f_gold(nums, k) {
    nums.sort();
    var ans = 1;
    var window = 0;
    var l = 0;
    var r = 1;
    var n = nums.length;
    while (r < n) {
        window += (nums[r] - nums[r - 1]) * (r - l);
        r += 1;
        while (window > k) {
            window -= nums[r - 1] - nums[l];
            l += 1;
        }
        ans = Math.max(ans, r - l);
    }
    return ans;
}

