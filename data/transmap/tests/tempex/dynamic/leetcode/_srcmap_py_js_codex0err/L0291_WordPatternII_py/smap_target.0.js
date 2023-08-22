function f_gold (pattern, s) {
    function dfs (i, j) {
        if (i == m && j == n) {
            return true;
        }
        if (i == m || j == n || n - j < m - i) {
            return false;
        }
        for (let k = j; k < n; k++) {
            let t = s.substring(j, k + 1);
            if (d.get(pattern[i]) == t) {
                if (dfs(i + 1, k + 1)) {
                    return true;
                }
            }
            if (!d.hasOwnProperty(pattern[i]) && !vis.has(t)) {
                d[pattern[i]] = t;
                vis.add(t);
                if (dfs(i + 1, k + 1)) {
                    return true;
                }
                delete d[pattern[i]];
                vis.delete(t);
            }
        }
        return false;
    }
    let m = pattern.length;
    let n = s.length;
    let d = {};
    let vis = new Set();
    return dfs(0, 0);
}

