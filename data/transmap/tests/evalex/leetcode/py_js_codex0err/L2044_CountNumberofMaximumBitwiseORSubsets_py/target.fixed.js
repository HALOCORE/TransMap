function f_gold(nums) {
    var mx = 0, ans = 0;
    for (var x of nums) {
        mx |= x;
    }
    function dfs(i, t) {
        if (i == nums.length) {
            if (t == mx) {
                ans++;
            }
            return;
        }
        dfs(i + 1, t);
        dfs(i + 1, t | nums[i]);
    }
    dfs(0, 0);
    return ans;
}

