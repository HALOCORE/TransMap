function f_gold(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var ans = [];
    var top = 0;
    var bottom = m - 1;
    var left = 0;
    var right = n - 1;
    while (left <= right && top <= bottom) {
        ans.push(...[matrix[top][j] for (var j = left; j <= right; j++)])
        ans.push(...[matrix[i][right] for (var i = top + 1; i <= bottom + 1; i++)])
        if (left < right && top < bottom) {
            ans.push(...[matrix[bottom][j] for (var j = right - 1; j >= left - 1; j--)])
            ans.push(...[matrix[i][left] for (var i = bottom - 1; i >= top; i--)])
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    return ans;
}

