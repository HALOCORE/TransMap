
function f_gold(grid) {
    function check(a, b) {
        if (!vis.has(a + "," + b)) {
            vis.add(a + "," + b);
            q.push([a, b]);
        }
    }
    var n = grid.length;
    var target = [n * n - 2, n * n - 1];
    var q = [[0, 1]];
    var vis = new Set([0 + "," + 1]);
    var ans = 0;
    while (q.length > 0) {
        for (var _ = 0; _ < q.length; _++) {
            var a = q.shift();
            var b = q.shift();
            if (a == target[0] && b == target[1]) return ans;
            var i1 = Math.floor(a / n);
            var j1 = a % n;
            var i2 = Math.floor(b / n);
            var j2 = b % n;
            if (j1 + 1 < n && j2 + 1 < n && grid[i1][j1 + 1] == 0 && grid[i2][j2 + 1] == 0) {
                check(i1 * n + j1 + 1, i2 * n + j2 + 1);
                if (j1 == j2) check(a, i1 * n + j2 + 1);
            }
            if (i1 + 1 < n && i2 + 1 < n && grid[i1 + 1][j1] == 0 && grid[i2 + 1][j2] == 0) {
                check((i1 + 1) * n + j1, (i2 + 1) * n + j2);
                if (i1 == i2) check(a, (i2 + 1) * n + j1);
            }
        }
        ans++;
    }
    return -1;
}

