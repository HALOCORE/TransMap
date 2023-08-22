
function f_gold(n) {
    function dfs(u) {
        if (u == n * 2) {
            return true;
        }
        if (path[u]) {
            return dfs(u + 1);
        }
        for (let i = n; i > 1; i--) {
            if (cnt[i] && u + i < n * 2 && path[u + i] == 0) {
                cnt[i] = 0;
                path[u] = path[u + i] = i;
                if (dfs(u + 1)) {
                    return true;
                }
                path[u] = path[u + i] = 0;
                cnt[i] = 2;
            }
        }
        if (cnt[1]) {
            cnt[1] = 0;
            path[u] = 1;
            if (dfs(u + 1)) {
                return true;
            }
            path[u] = 0;
            cnt[1] = 1;
        }
        return false;
    }
    let path = new Array(n * 2);
    let cnt = new Array(n * 2);
    for (let i = 0; i < n * 2; i++) {
        path[i] = 0;
        cnt[i] = 2;
    }
    cnt[1] = 1;
    dfs(1);
    return path.slice(1);
}

