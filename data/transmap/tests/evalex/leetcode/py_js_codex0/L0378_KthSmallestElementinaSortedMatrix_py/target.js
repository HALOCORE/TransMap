
function f_gold(matrix, k) {
    function check(matrix, mid, k, n) {
        let count = 0;
        let i = n - 1;
        let j = 0;
        while (i >= 0 && j < n) {
            if (matrix[i][j] <= mid) {
                count += i + 1;
                j += 1;
            }
            else {
                i -= 1;
            }
        }
        return count >= k;
    }
    let n = matrix.length;
    let left = matrix[0][0];
    let right = matrix[n - 1][n - 1];
    while (left < right) {
        let mid = (left + right) >> 1;
        if (check(matrix, mid, k, n)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

