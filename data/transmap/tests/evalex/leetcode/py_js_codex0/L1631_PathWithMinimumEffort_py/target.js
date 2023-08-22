
function f_gold(heights) {
    var INF = 0x3F3F3F3F;
    var m = heights.length;
    var n = heights[0].length;
    var dist = new Array(m);
    for (var _i = 0; _i < m; _i++) {
        dist[_i] = new Array(n);
        for (var _j = 0; _j < n; _j++) {
            dist[_i][_j] = INF;
        }
    }
    dist[0][0] = 0;
    var dirs = [-1, 0, 1, 0, -1];
    var q = [[0, 0, 0]];
    while (q.length > 0) {
        var t = q[0][0];
        var i = q[0][1];
        var j = q[0][2];
        q.shift();
        for (var k = 0; k < 4; k++) {
            var x = i + dirs[k];
            var y = j + dirs[k + 1];
            if (0 <= x && x < m && 0 <= y && y < n && Math.max(t, Math.abs(heights[x][y] - heights[i][j])) < dist[x][y]) {
                dist[x][y] = Math.max(t, Math.abs(heights[x][y] - heights[i][j]));
                q.push([dist[x][y], x, y]);
            }
        }
    }
    return dist[m - 1][n - 1];
}

