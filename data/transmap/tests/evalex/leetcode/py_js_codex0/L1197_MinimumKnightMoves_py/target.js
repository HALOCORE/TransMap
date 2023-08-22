function f_gold(x, y) {
    var q = new Array();
    q.push([0, 0]);
    var ans = 0;
    var vis = new Set();
    vis.add([0, 0]);
    var dirs = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    while (q.length > 0) {
        for (var _ = 0; _ < q.length; _++) {
            var i = q[0][0];
            var j = q[0][1];
            q.shift();
            if (i == x && j == y) {
                return ans;
            }
            for (var a = 0; a < dirs.length; a++) {
                var b = a + 1;
                var c = i + dirs[a][0];
                var d = j + dirs[a][1];
                if (!vis.has([c, d])) {
                    vis.add([c, d]);
                    q.push([c, d]);
                }
            }
        }
        ans += 1;
    }
    return -1;
}

