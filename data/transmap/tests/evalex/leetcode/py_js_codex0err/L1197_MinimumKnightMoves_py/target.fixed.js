function f_gold(x, y) {
    var q = new Array();
    q.push([0, 0]);
    var ans = 0;
    var vis = new Set();
    vis.add([0, 0].join(","));
    var dirs = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];
    while (q.length > 0) {
        for (var _ = 0, length = q.length; _ < length; _++) {
            var i = q[0][0];
            var j = q[0][1];
            q.shift();
            if (i == x && j == y) {
                return ans;
            }
            for (var [a, b] of dirs) {
                var c = i + a;
                var d = j + b;
                if (!vis.has([c, d].join(","))) {
                    vis.add([c, d].join(","));
                    q.push([c, d]);
                }
            }
        }
        ans += 1;
    }
    return -1;
}

