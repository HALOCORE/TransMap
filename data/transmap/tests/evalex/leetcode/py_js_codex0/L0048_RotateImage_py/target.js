function f_gold(matrix) {
    var s = 0, n = matrix.length;
    while (s < (n >> 1)) {
        var e = n - s - 1;
        for (var i = s; i < e; i++) {
            var t = matrix[i][e];
            matrix[i][e] = matrix[s][i];
            matrix[s][i] = matrix[n - i - 1][s];
            matrix[n - i - 1][s] = matrix[e][n - i - 1];
            matrix[e][n - i - 1] = t;
        }
        s += 1;
    }
}

