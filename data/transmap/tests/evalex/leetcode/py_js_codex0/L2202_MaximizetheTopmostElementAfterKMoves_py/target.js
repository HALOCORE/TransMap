function f_gold(nums, k) {
    if (k == 0) {
        return nums[0];
    }
    var n = nums.length;
    if (n == 1) {
        if (k % 2) {
            return -1;
        }
        return nums[0];
    }
    var ans = Math.max.apply(null, nums.slice(0, k - 1));
    if (k < n) {
        ans = Math.max(ans, nums[k]);
    }
    return ans;
}

