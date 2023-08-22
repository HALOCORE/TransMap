
function f_gold(mat, target) {
    function rotate(matrix) {
        var n = matrix.length;
        for (var i = 0; i < n / 2; i++) {
            for (var j = i; j < n - 1 - i; j++) {
                var t = matrix[i][j];
                matrix[i][j] = matrix[n - j - 1][i];
                matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
                matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
                matrix[j][n - i - 1] = t;
            }
        }
    }
    for (var _ = 0; _ < 4; _++) {
        if (mat == target) {
            return true;
        }
        rotate(mat);
    }
    return false;
}

