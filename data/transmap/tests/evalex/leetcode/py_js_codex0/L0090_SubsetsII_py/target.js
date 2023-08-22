function f_gold(nums) {
    function dfs(u, t) {
        ans.push(t.slice());
        for (let i = u; i < nums.length; i++) {
            if (i != u && nums[i] == nums[i - 1])
                continue;
            t.push(nums[i]);
            dfs(i + 1, t);
            t.pop();
        }
    }
    let ans = [];
    nums.sort();
    dfs(0, []);
    return ans;
}

