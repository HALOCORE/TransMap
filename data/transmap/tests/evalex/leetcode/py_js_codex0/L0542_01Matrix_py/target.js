
function f_gold(mat) {
    var m = mat.length;
    var n = mat[0].length;
    var ans = Array(m);
    for (var i = 0; i < m; i++) {
        ans[i] = Array(n).fill(-1);
    }
    var q = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                ans[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        q.shift();
        for (var k = 0; k < dirs.length; k++) {
            var a = dirs[k][0];
            var b = dirs[k][1];
            var x = i + a;
            var y = j + b;
            if (x >= 0 && x < m && y >= 0 && y < n && ans[x][y] == -1) {
                ans[x][y] = ans[i][j] + 1;
                q.push([x, y]);
            }
        }
    }
    return ans;
}

