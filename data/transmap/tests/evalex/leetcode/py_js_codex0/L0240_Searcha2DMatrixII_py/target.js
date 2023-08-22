function f_gold(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var i = m - 1;
    var j = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] == target) {
            return true;
        }
        if (matrix[i][j] > target) {
            i -= 1;
        }
        else {
            j += 1;
        }
    }
    return false;
}

