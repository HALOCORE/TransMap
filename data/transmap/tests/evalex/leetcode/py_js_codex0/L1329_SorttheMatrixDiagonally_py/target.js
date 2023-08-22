function f_gold(mat) {
    var m, n;
    m = mat.length;
    n = mat[0].length;
    for (var k = 0; k < Math.min(m, n) - 1; k++) {
        for (var i = 0; i < m - 1; i++) {
            for (var j = 0; j < n - 1; j++) {
                if (mat[i][j] > mat[i + 1][j + 1]) {
                    var temp = mat[i][j];
                    mat[i][j] = mat[i + 1][j + 1];
                    mat[i + 1][j + 1] = temp;
                }
            }
        }
    }
    return mat;
}

