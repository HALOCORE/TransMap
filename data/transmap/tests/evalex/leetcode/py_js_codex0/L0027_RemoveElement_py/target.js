function f_gold(nums, val) {
    var cnt = 0;
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        if (nums[i] == val) {
            cnt++;
        }
        else {
            nums[i - cnt] = nums[i];
        }
    }
    return n - cnt;
}

