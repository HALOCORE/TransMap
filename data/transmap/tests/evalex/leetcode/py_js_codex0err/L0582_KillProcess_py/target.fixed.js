
function f_gold(pid, ppid, kill) {
    function dfs(u) {
        ans.push(u);
        for (let v of g[u] ?? []) {
            dfs(v);
        }
    }
    let g = {};
    let n = pid.length;
    for (let i = 0; i < n; i++) {
        if (g[ppid[i]] === undefined) {
            g[ppid[i]] = [];
        }
        g[ppid[i]].push(pid[i]);
    }
    let ans = [];
    dfs(kill);
    return ans;
}

