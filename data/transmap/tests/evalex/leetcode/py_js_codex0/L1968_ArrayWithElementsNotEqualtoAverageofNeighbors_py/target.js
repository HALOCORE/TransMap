function f_gold(nums) {
    nums.sort();
    var n = nums.length;
    var m = (n + 1) >> 1;
    var ans = [];
    for (var i = 0; i < m; i++) {
        ans.push(nums[i]);
        if (i + m < n) {
            ans.push(nums[i + m]);
        }
    }
    return ans;
}

