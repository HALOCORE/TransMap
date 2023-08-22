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
            var i = q.shift();
            ans.push(i);
            for (var j = 0; j < 4; j++) {
                var a = [1, -1, 0, 0];
                var b = [0, 0, 1, -1];
                var x = i[0] + a[j];
                var y = i[1] + b[j];
                if (0 <= x < rows && 0 <= y < cols && !vis[x][y]) {
                    q.push([x, y]);
                    vis[x][y] = true;
                }
            }
        }
    }
    return ans;
}

