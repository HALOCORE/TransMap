
function f_gold(isWater) {
    var m = isWater.length;
    var n = isWater[0].length;
    var ans = new Array(m);
    for (var i = 0; i < m; i++) {
        ans[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            ans[i][j] = -1;
        }
    }
    var q = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (isWater[i][j] == 1) {
                ans[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        q.shift();
        if (true) {
            for (var [a, b] of [[0, -1], [0, 1], [1, 0], [-1, 0]]) {
                var x = i + a;
                var y = j + b;
                if (0 <= x && x < m && 0 <= y && y < n && ans[x][y] == -1) {
                    ans[x][y] = ans[i][j] + 1;
                    q.push([x, y]);
                }
            }
        }
    }
    return ans;
}

