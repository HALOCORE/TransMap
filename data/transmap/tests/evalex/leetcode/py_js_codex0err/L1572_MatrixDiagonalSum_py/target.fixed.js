function f_gold(mat) {
    var n = mat.length;
    var res = 0;
    for (var i = 0; i < n; i++) {
        res += mat[i][i] + ((n - i - 1 == i) ? 0 : mat[i][n - i - 1]);
    }
    return res;
}

