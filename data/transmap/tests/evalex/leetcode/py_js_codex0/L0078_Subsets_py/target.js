function f_gold(nums) {
    function dfs(u, t) {
        if (u == nums.length) {
            ans.push(t.slice());
            return;
        }
        dfs(u + 1, t);
        t.push(nums[u]);
        dfs(u + 1, t);
        t.pop();
    }
    var ans = [];
    dfs(0, []);
    return ans;
}

