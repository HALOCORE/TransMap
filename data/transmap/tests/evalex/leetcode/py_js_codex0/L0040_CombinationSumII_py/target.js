function f_gold(candidates, target) {
    function dfs(u, s, t) {
        if (s > target) {
            return;
        }
        if (s == target) {
            ans.push(t.slice());
            return;
        }
        for (let i = u; i < candidates.length; i++) {
            if (i > u && candidates[i] == candidates[i - 1]) {
                continue;
            }
            t.push(candidates[i]);
            dfs(i + 1, s + candidates[i], t);
            t.pop();
        }
    }
    let ans = [];
    candidates.sort();
    dfs(0, 0, []);
    return ans;
}

