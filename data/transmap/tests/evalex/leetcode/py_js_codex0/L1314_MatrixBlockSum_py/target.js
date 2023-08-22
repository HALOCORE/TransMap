function f_gold(mat, k) {
    var m = mat.length;
    var n = mat[0].length;
    var pre = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            pre[i][j] = (pre[i - 1][j] + pre[i][j - 1] - pre[i - 1][j - 1] + mat[i - 1][j - 1]);
        }
    }
    function get(i, j) {
        i = Math.max(Math.min(m, i), 0);
        j = Math.max(Math.min(n, j), 0);
        return pre[i][j];
    }
    var ans = Array(m).fill(0).map(() => Array(n).fill(0));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            ans[i][j] = (get(i + k + 1, j + k + 1) - get(i + k + 1, j - k) - get(i - k, j + k + 1) + get(i - k, j - k));
        }
    }
    return ans;
}

