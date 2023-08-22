function f_gold(grid) {
    function dfs(i, j) {
        grid[i][j] = 0;
        var ans = 1;
        for (var a = 0; a < 2; a++) {
            for (var b = 0; b < 2; b++) {
                var x = i + a;
                var y = j + b;
                if (0 <= x < m && 0 <= y < n && grid[x][y] == 1) {
                    ans += dfs(x, y);
                }
            }
        }
        return ans;
    }
    var m = grid.length;
    var n = grid[0].length;
    return Math.max(
        [dfs(i, j) for (var i = 0; i < m; i++) for (var j = 0; j < n; j++) if (grid[i][j] == 1)],
        0
    );
}

