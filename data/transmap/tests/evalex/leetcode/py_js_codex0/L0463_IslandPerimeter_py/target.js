function f_gold(grid) {
    var m, n;
    m = grid.length;
    n = grid[0].length;
    var ans = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                ans += 4;
                if (i < m - 1 && grid[i + 1][j] == 1) {
                    ans -= 2;
                }
                if (j < n - 1 && grid[i][j + 1] == 1) {
                    ans -= 2;
                }
            }
        }
    }
    return ans;
}

