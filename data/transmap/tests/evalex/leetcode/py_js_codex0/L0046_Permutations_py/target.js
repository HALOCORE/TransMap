function f_gold(nums) {
    var n = nums.length;
    var res = [];
    var path = Array(n).fill(0);
    var used = Array(n).fill(false);
    function dfs(u) {
        if (u == n) {
            res.push(path.slice());
            return;
        }
        for (var i = 0; i < n; i++) {
            if (!used[i]) {
                path[u] = nums[i];
                used[i] = true;
                dfs(u + 1);
                used[i] = false;
            }
        }
    }
    dfs(0);
    return res;
}

