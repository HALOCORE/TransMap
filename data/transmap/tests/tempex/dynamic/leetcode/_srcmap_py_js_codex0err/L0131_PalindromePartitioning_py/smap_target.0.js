function f_gold(s) {
    var ans = [];
    var n = s.length;
    var dp = new Array(n);
    for (var _ = 0; _ < n; _++) {
        dp[_] = new Array(n);
    }
    for (var i = n - 1; i >= 0; i--) {
        for (var j = i + 1; j < n; j++) {
            dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
        }
    }
    function dfs(s, i, t) {
        if (i == n) {
            ans.push(t.slice());
            return;
        }
        for (var j = i; j < n; j++) {
            if (dp[i][j]) {
                t.push(s.substring(i, j + 1));
                dfs(s, j + 1, t);
                t.pop();
            }
        }
    }
    dfs(s, 0, []);
    return ans;
}

