function f_gold(matrix) {
    var n = matrix.length;
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var mi = matrix[i - 1][j];
            if (j > 0) {
                mi = Math.min(mi, matrix[i - 1][j - 1]);
            }
            if (j < n - 1) {
                mi = Math.min(mi, matrix[i - 1][j + 1]);
            }
            matrix[i][j] += mi;
        }
    }
    return Math.min(...matrix[n - 1]);
}

