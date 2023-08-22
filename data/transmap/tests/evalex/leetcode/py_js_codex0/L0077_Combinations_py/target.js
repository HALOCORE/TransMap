function f_gold(n, k) {
    var res = [];
    function dfs(i, n, k, t) {
        if (t.length == k) {
            res.push(t.slice());
            return;
        }
        for (var j = i; j <= n; j++) {
            t.push(j);
            dfs(j + 1, n, k, t);
            t.pop();
        }
    }
    dfs(1, n, k, []);
    return res;
}

