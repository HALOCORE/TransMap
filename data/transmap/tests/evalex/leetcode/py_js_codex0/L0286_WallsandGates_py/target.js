function f_gold(rooms) {
    var m = rooms.length;
    var n = rooms[0].length;
    var inf = 2 ** 31 - 1;
    var q = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (rooms[i][j] == 0) {
                q.push([i, j]);
            }
        }
    }
    var d = 0;
    while (q.length > 0) {
        d += 1;
        for (var _ = 0; _ < q.length; _++) {
            var i = q[0][0];
            var j = q[0][1];
            q.shift();
            for (var _a = 0, _b = [[0, 1], [0, -1], [1, 0], [-1, 0]]; _a < _b.length; _a++) {
                var a = _b[_a][0];
                var b = _b[_a][1];
                var x = i + a;
                var y = j + b;
                if (0 <= x && x < m && 0 <= y && y < n && rooms[x][y] == inf) {
                    rooms[x][y] = d;
                    q.push([x, y]);
                }
            }
        }
    }
}

