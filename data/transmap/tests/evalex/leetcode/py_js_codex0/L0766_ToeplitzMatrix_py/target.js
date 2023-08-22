function f_gold(matrix) {
    var m, n;
    m = matrix.length;
    n = matrix[0].length;
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
}

