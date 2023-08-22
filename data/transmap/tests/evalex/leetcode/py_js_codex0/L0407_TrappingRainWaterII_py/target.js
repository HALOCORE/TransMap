
function f_gold(heightMap) {
    var m = heightMap.length;
    var n = heightMap[0].length;
    var vis = Array(m).fill(0).map(() => Array(n).fill(false));
    var pq = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                pq.push([heightMap[i][j], i, j]);
                vis[i][j] = true;
            }
        }
    }
    pq.sort(function (a, b) {
        return a[0] - b[0];
    });
    var ans = 0;
    while (pq.length > 0) {
        var e = pq.shift();
        for (var _i = 0, _a = [[0, 1], [0, -1], [1, 0], [-1, 0]]; _i < _a.length; _i++) {
            var x = _a[_i][0];
            var y = _a[_i][1];
            var i = e[1] + x;
            var j = e[2] + y;
            if (i >= 0 && i < m && j >= 0 && j < n && !vis[i][j]) {
                if (heightMap[i][j] < e[0]) {
                    ans += e[0] - heightMap[i][j];
                }
                vis[i][j] = true;
                pq.push([Math.max(heightMap[i][j], e[0]), i, j]);
                pq.sort(function (a, b) {
                    return a[0] - b[0];
                });
            }
        }
    }
    return ans;
}

