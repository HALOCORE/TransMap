function f_gold(candidates, target) {
    function dfs(s, u, t) {
        if (s == target) {
            ans.push(t.slice());
            return;
        }
        if (s > target) {
            return;
        }
        for (let i = u; i < candidates.length; i++) {
            let c = candidates[i];
            t.push(c);
            dfs(s + c, i, t);
            t.pop();
        }
    }
    let ans = [];
    dfs(0, 0, []);
    return ans;
}

