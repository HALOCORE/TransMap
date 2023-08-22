function f_gold(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var left = 0;
    var right = m * n - 1;
    while (left < right) {
        var mid = (left + right) >> 1;
        var x = Math.floor(mid / n);
        var y = mid % n;
        if (matrix[x][y] >= target) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return matrix[Math.floor(left / n)][left % n] == target;
}

