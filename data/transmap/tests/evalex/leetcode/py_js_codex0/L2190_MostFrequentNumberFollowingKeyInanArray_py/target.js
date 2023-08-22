function f_gold(nums, key) {
    var cnt = {};
    var mx = 0;
    var ans = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == key) {
            var target = nums[i + 1];
            if (cnt[target] == undefined) {
                cnt[target] = 1;
            }
            else {
                cnt[target] += 1;
            }
            if (mx < cnt[target]) {
                mx = cnt[target];
                ans = nums[i + 1];
            }
        }
    }
    return ans;
}

