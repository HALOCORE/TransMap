
function cache(f) {
    return f;
}

function f_gold(m, n, prices) {
    function dfs(h, w) {
        let ans = h in d ? (d[h][w] ?? 0) : 0;
        for (let i = 1; i <= h / 2; i++) {
            ans = Math.max(ans, dfs(i, w) + dfs(h - i, w));
        }
        for (let i = 1; i <= w / 2; i++) {
            ans = Math.max(ans, dfs(h, i) + dfs(h, w - i));
        }
        return ans;
    }
    let d = new Map();
    for (let [h, w, p] of prices) {
        if (!(h in d)) d[h] = {};
        d[h][w] = p;
    }
    return dfs(m, n);
}

