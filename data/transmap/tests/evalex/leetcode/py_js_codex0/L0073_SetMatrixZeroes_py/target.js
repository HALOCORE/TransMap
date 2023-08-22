
function f_gold(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var zero_rows = new Array(m).fill(false);
    var zero_cols = new Array(n).fill(false);
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                zero_rows[i] = true;
                zero_cols[j] = true;
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (zero_rows[i] || zero_cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
}

