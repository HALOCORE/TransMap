
function f_gold(grid) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    function union(a, b) {
        var pa = find(a);
        var pb = find(b);
        if (pa != pb) {
            p[pa] = pb;
            size -= 1;
        }
    }
    var n = grid.length;
    var size = n * n * 4;
    var p = Array.from(Array(size).keys());
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            var k = i * n + j;
            if (i < n - 1) {
                union(4 * k + 2, (k + n) * 4);
            }
            if (j < n - 1) {
                union(4 * k + 1, (k + 1) * 4 + 3);
            }
            if (grid[i][j] == '/') {
                union(4 * k, 4 * k + 3);
                union(4 * k + 1, 4 * k + 2);
            }
            else if (grid[i][j] == '\\') {
                union(4 * k, 4 * k + 1);
                union(4 * k + 2, 4 * k + 3);
            }
            else {
                union(4 * k, 4 * k + 1);
                union(4 * k + 1, 4 * k + 2);
                union(4 * k + 2, 4 * k + 3);
            }
        }
    }
    return size;
}

