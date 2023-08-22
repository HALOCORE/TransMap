
function f_gold(grid, row, col, color) {
    var m = grid.length;
    var n = grid[0].length;
    var vis = new Array(m);
    for (var i = 0; i < m; i++) {
        vis[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            vis[i][j] = false;
        }
    }
    function dfs(i, j, color) {
        vis[i][j] = true;
        var old_color = grid[i][j];
        for (var a = -1; a <= 1; a++) {
            for (var b = -1; b <= 1; b++) {
                if (a == 0 && b == 0) continue;
                var x = a + i;
                var y = b + j;
                if (0 <= x && x < m && 0 <= y && y < n) {
                    if (!vis[x][y]) {
                        if (grid[x][y] == old_color) {
                            dfs(x, y, color);
                        }
                        else {
                            grid[i][j] = color;
                        }
                    }
                }
                else {
                    grid[i][j] = color;
                }
            }
        }
    }
    dfs(row, col, color);
    return grid;
}

