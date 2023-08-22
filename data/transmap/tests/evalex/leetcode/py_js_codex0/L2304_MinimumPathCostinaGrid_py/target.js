
function f_gold(grid, moveCost) {
    var n = grid[0].length;
    var f = new Array(n);
    for (var i = 0; i < grid.length; i++) {
        var g = new Array(n);
        for (var j = 0; j < grid[i].length; j++) {
            g[j] = grid[i][j];
            var t = Number.POSITIVE_INFINITY;
            if (i) {
                for (var k = 0; k < grid[i - 1].length; k++) {
                    t = Math.min(t, f[k] + moveCost[grid[i - 1][k]][j]);
                }
            }
            if (t != Number.POSITIVE_INFINITY) {
                g[j] += t;
            }
        }
        f = g;
    }
    return Math.min(...f);
}

