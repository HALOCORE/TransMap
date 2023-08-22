function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    for (var i = 0; i < m; i++) {
        if (grid[i][0] == 0) {
            for (var j = 0; j < n; j++) {
                grid[i][j] ^= 1;
            }
        }
    }
    var res = 0;
    for (var j = 0; j < n; j++) {
        var cnt = 0;
        for (var i = 0; i < m; i++) {
            cnt += grid[i][j];
        }
        res += Math.max(cnt, m - cnt) * (1 << (n - j - 1));
    }
    return res;
}

