
function cache(f) {
    return f;
}

function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var dfs = cache(function (i, j, t) {
        if (grid[i][j] == '(') {
            t += 1;
        } else {
            t -= 1;
        }
        if (t < 0) {
            return false;
        }
        if (i == m - 1 && j == n - 1) {
            return t == 0;
        }
        for (var _i = 0, _a = [[i + 1, j], [i, j + 1]]; _i < _a.length; _i++) {
            var _b = _a[_i],
                x = _b[0],
                y = _b[1];
            if (x < m && y < n && dfs(x, y, t)) {
                return true;
            }
        }
        return false;
    });
    return dfs(0, 0, 0);
}

