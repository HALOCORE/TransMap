function f_gold(rows, cols, rCenter, cCenter) {
    var q = new Array();
    q.push([rCenter, cCenter]);
    var vis = new Array(rows);
    for (var i = 0; i < rows; i++) {
        vis[i] = new Array(cols);
        for (var j = 0; j < cols; j++) {
            vis[i][j] = false;
        }
    }
    vis[rCenter][cCenter] = true;
    var ans = new Array();
    while (q.length > 0) {
        for (var i = 0; i < q.length; i++) {
            var [i, j] = q.shift();
            ans.push([i, j]);
            for (var k = 0; k < 4; k++) {
                var a = [1, -1, 0, 0];
                var b = [0, 0, 1, -1];
                var x = i + a[k];
                var y = j + b[k];
                if (0 <= x && x < rows && 0 <= y && y < cols && !vis[x][y]) {
                    q.push([x, y]);
                    vis[x][y] = true;
                }
            }
        }
    }
    return ans;
}

