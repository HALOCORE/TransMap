
function cache(f) {
    return f;
}

function f_gold(matrix) {
    var dfs = cache(function (i, j) {
        var ans = 1;
        for (var _i = 0, _a = [[-1, 0], [1, 0], [0, 1], [0, -1]]; _i < _a.length; _i++) {
            var a = _a[_i][0],
                b = _a[_i][1];
            var x = i + a,
                y = j + b;
            if (0 <= x && x < m && 0 <= y && y < n && matrix[x][y] > matrix[i][j]) {
                ans = Math.max(ans, dfs(x, y) + 1);
            }
        }
        return ans;
    });
    var m = matrix.length,
        n = matrix[0].length;
    return Math.max.apply(Math, Array.from(Array(m), function (_, i) {
        return Array.from(Array(n), function (_, j) {
            return dfs(i, j);
        });
    }).flat());
}

