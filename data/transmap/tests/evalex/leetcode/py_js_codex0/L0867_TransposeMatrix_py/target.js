function f_gold(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var res = new Array(n);
    for (var i = 0; i < n; i++) {
        res[i] = new Array(m);
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            res[i][j] = matrix[j][i];
        }
    }
    return res;
}

