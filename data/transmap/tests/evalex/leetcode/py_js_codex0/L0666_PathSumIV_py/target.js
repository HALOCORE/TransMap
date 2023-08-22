
function f_gold(nums) {
    function dfs(node, t) {
        if (!mp.hasOwnProperty(node)) return;
        t += mp[node];
        let d = Math.floor(node / 10);
        let p = node % 10;
        let l = (d + 1) * 10 + (p * 2) - 1;
        let r = l + 1;
        if (!mp.hasOwnProperty(l) && !mp.hasOwnProperty(r)) {
            ans += t;
            return;
        }
        dfs(l, t);
        dfs(r, t);
    }
    let ans = 0;
    let mp = {};
    for (let i = 0; i < nums.length; i++) {
        mp[Math.floor(nums[i] / 10)] = nums[i] % 10;
    }
    dfs(11, 0);
    return ans;
}

