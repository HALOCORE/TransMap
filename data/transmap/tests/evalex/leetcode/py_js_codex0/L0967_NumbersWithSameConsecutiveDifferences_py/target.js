function f_gold(n, k) {
    var ans = [];
    function dfs(n, k, t) {
        if (n == 0) {
            ans.push(t);
            return;
        }
        var last = t % 10;
        if (last + k <= 9) {
            dfs(n - 1, k, t * 10 + last + k);
        }
        if (last - k >= 0 && k != 0) {
            dfs(n - 1, k, t * 10 + last - k);
        }
    }
    for (var i = 1; i < 10; i++) {
        dfs(n - 1, k, i);
    }
    return ans;
}

