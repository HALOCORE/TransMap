function f_gold(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var f = new Array(m);
    for (var i = 0; i < m; i++) {
        f[i] = new Array(n);
    }
    var ans = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                continue;
            }
            if (i == 0 || j == 0) {
                f[i][j] = 1;
            }
            else {
                f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j], f[i][j - 1]) + 1;
            }
            ans += f[i][j];
        }
    }
    return ans;
}

