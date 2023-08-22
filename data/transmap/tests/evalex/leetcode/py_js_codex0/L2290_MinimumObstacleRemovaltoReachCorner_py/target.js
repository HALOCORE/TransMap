
function f_gold(grid) {
    var q = new Array();
    q.push([0, 0, 0]);
    var m = grid.length;
    var n = grid[0].length;
    var vis = new Set();
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        var k = q[0][2];
        q.shift();
        if (i == m - 1 && j == n - 1) {
            return k;
        }
        if (vis.has([i, j])) {
            continue;
        }
        vis.add([i, j]);
        for (var a = 0; a < 2; a++) {
            for (var b = 0; b < 2; b++) {
                var x = i + a;
                var y = j + b;
                if (0 <= x < m && 0 <= y < n) {
                    if (grid[x][y] == 0) {
                        q.unshift([x, y, k]);
                    }
                    else {
                        q.push([x, y, k + 1]);
                    }
                }
            }
        }
    }
    return 0;
}

