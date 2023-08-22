function f_gold(nums) {
    var mi = nums[0];
    var ans = -1;
    var n = nums.length;
    for (var i = 1; i < n; i++) {
        if (nums[i] > mi) {
            ans = Math.max(ans, nums[i] - mi);
        }
        else {
            mi = nums[i];
        }
    }
    return ans;
}

