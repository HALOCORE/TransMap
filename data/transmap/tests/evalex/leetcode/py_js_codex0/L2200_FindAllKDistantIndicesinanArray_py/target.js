function f_gold(nums, key, k) {
    var ans = [];
    var n = nums.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (Math.abs(i - j) <= k && nums[j] == key) {
                ans.push(i);
                break;
            }
        }
    }
    return ans;
}

