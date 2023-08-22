function f_gold(mat) {
    var n = mat.length;
    var res = 0;
    for (var i = 0; i < n; i++) {
        res += mat[i][i] + (0 if n - i - 1 == i else mat[i][n - i - 1]);
    }
    return res;
}

