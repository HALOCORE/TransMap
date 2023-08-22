
function f_gold(cookies, k) {
    function dfs(u) {
        if (u == cookies.length) {
            ans = Math.min(ans, Math.max(...cnt));
            return;
        }
        for (let i = 0; i < k; i++) {
            if (cnt[i] + cookies[u] < ans) {
                cnt[i] += cookies[u];
                dfs(u + 1);
                cnt[i] -= cookies[u];
            }
        }
    }
    let ans = Number.MAX_VALUE;
    let cnt = new Array(k).fill(0);
    dfs(0);
    return ans;
}

