function f_gold(m, n, guards, walls) {
    var g = new Array(m);
    for (var _ = 0; _ < m; _++) {
        g[_] = new Array(n);
    }
    for (var _ = 0; _ < guards.length; _++) {
        var r = guards[_][0];
        var c = guards[_][1];
        g[r][c] = 'g';
    }
    for (var _ = 0; _ < walls.length; _++) {
        var r = walls[_][0];
        var c = walls[_][1];
        g[r][c] = 'w';
    }
    for (var _ = 0; _ < guards.length; _++) {
        var i = guards[_][0];
        var j = guards[_][1];
        for (var _ = 0; _ < 4; _++) {
            var a = [0, 0, 1, -1][_];
            var b = [-1, 1, 0, 0][_];
            var x = i;
            var y = j;
            while (0 <= x + a && x + a < m && 0 <= y + b && y + b < n && g[x + a][y + b] != 'w' && g[x + a][y + b] != 'g') {
                x = x + a;
                y = y + b;
                g[x][y] = 'v';
            }
        }
    }
    var sum = 0;
    for (var _ = 0; _ < g.length; _++) {
        for (var _ = 0; _ < g[_].length; _++) {
            var v = g[_][_];
            sum = sum + (!v);
        }
    }
    return sum;
}

