
function f_gold(grid, stampHeight, stampWidth) {
    var m = grid.length;
    var n = grid[0].length;
    var s = new Array(m + 1);
    for (var _i = 0; _i < m + 1; _i++) {
        s[_i] = new Array(n + 1);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            s[i + 1][j + 1] = s[i + 1][j] + s[i][j + 1] - s[i][j] + grid[i][j];
        }
    }
    var d = new Array(m + 1);
    for (var _i2 = 0; _i2 < m + 1; _i2++) {
        d[_i2] = new Array(n + 1);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                var x = i + stampHeight;
                var y = j + stampWidth;
                if (x <= m && y <= n && s[x][y] - s[x][j] - s[i][y] + s[i][j] == 0) {
                    d[i][j] += 1;
                    d[i][y] -= 1;
                    d[x][j] -= 1;
                    d[x][y] += 1;
                }
            }
        }
    }
    var cnt = new Array(m + 1);
    for (var _i3 = 0; _i3 < m + 1; _i3++) {
        cnt[_i3] = new Array(n + 1);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            cnt[i + 1][j + 1] = cnt[i + 1][j] + cnt[i][j + 1] - cnt[