
function f_gold(grid, pricing, start, k) {
    var m = grid.length;
    var n = grid[0].length;
    var row = start[0];
    var col = start[1];
    var low = pricing[0];
    var high = pricing[1];
    var items = [];
    if (low <= grid[row][col] && grid[row][col] <= high) {
        items.push([0, grid[row][col], row, col]);
    }
    var q = [[row, col, 0]];
    grid[row][col] = 0;
    while (q.length > 0) {
        var i = q[0][0];
        var j = q[0][1];
        var d = q[0][2];
        q.shift();
        for (var a = 0; a < 2; a++) {
            for (var b = -1; b < 2; b++) {
                if (a == 0 && b == 0) {
                    continue;
                }
                var x = i + a;
                var y = j + b;
                if (0 <= x && x < m && 0 <= y && y < n && grid[x][y]) {
                    if (low <= grid[x][y] && grid[x][y] <= high) {
                        items.push([d + 1, grid[x][y], x, y]);
                    }
                    q.push([x, y, d + 1]);
                    grid[x][y] = 0;
                }
            }
        }
    }
    items.sort();
    var result = [];
    for (var i_1 = 0; i_1 < items.length; i_1++) {
        result.push(items[i_1].slice(2));
    }
    return result.slice(0, k);
}

