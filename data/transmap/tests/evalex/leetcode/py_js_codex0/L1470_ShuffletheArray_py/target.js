function f_gold(nums, n) {
    var ans = [];
    for (var i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[i + n]);
    }
    return ans;
}

