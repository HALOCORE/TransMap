
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var dirs = [[0, 0], [0, 1], [0, -1], [1, 0], [-1, 0]];
    var q = [[0, 0, 0]];
    var vis = new Set();
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        var d = q[0][2];
        q.shift();
        if (vis.has([i, j])) {
            continue;
        }
        vis.add([i, j]);
        if (i == m - 1 && j == n - 1) {
            return d;
        }
        for (var k = 1; k < 5; k++) {
            var x = i + dirs[k][0];
            var y = j + dirs[k][1];
            if (0 <= x && x < m && 0 <= y && y < n) {
                if (grid[i][j] == k) {
                    q.unshift([x, y, d]);
                }
                else {
                    q.push([x, y, d + 1]);
                }
            }
        }
    }
    return -1;
}

