function f_gold(nums, k) {
    var mp = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in mp && i - mp[nums[i]] <= k) {
            return true;
        }
        mp[nums[i]] = i;
    }
    return false;
}

