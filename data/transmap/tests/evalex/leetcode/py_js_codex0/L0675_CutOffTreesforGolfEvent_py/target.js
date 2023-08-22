
function f_gold(forest) {
    function f(i, j, x, y) {
        return Math.abs(i - x) + Math.abs(j - y);
    }
    function bfs(i, j, x, y) {
        var q = [(f(i, j, x, y), i, j)];
        var dist = {};
        dist[i * n + j] = 0;
        while (q.length > 0) {
            var _ = q.shift();
            var i = _[1];
            var j = _[2];
            var step = dist[i * n + j];
            if (i == x && j == y) {
                return step;
            }
            for (var _i = 0, _a = [[0, -1], [0, 1], [-1, 0], [1, 0]]; _i < _a.length; _i++) {
                var _b = _a[_i],
                    a = _b[0],
                    b = _b[1];
                var c = i + a;
                var d = j + b;
                if (0 <= c && c < m && 0 <= d && d < n && forest[c][d] > 0) {
                    if (!(c * n + d in dist) || dist[c * n + d] > step + 1) {
                        dist[c * n + d] = step + 1;
                        q.push((dist[c * n + d] + f(c, d, x, y), c, d));
                    }
                }
            }
        }
        return -1;
    }
    var m = forest.length;
    var n = forest[0].length;
    var trees = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (forest[i][j] > 1) {
                trees.push([forest[i][j], i, j]);
            }
        }
    }
    trees.sort();
    var i = 0;
    var j = 0;
    var