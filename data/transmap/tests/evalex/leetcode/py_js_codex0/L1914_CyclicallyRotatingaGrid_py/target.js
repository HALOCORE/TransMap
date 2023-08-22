
function f_gold(grid, k) {
    function rotate(grid, s1, e1, s2, e2, k) {
        var t = [];
        for (var j = e2; j >= e1; j--) {
            t.push(grid[s1][j]);
        }
        for (var i = s1; i <= s2; i++) {
            t.push(grid[i][e1]);
        }
        for (var j = e1; j <= e2; j++) {
            t.push(grid[s2][j]);
        }
        for (var i = s2; i >= s1; i--) {
            t.push(grid[i][e2]);
        }
        k %= t.length;
        t = t.slice(-k).concat(t.slice(0, -k));
        k = 0;
        for (var j = e2; j >= e1; j--) {
            grid[s1][j] = t[k];
            k++;
        }
        for (var i = s1; i <= s2; i++) {
            grid[i][e1] = t[k];
            k++;
        }
        for (var j = e1; j <= e2; j++) {
            grid[s2][j] = t[k];
            k++;
        }
        for (var i = s2; i >= s1; i--) {
            grid[i][e2] = t[k];
            k++;
        }
    }
    var m = grid.length;
    var n = grid[0].length;
    var s1 = e1 = 0;
    var s2 = m - 1;
    var e2 = n - 1;
    while (s1 <= s2 && e1 <= e2) {
        rotate(grid, s1, e1, s2, e2, k);
        s1++;
        e1++;
        s2--;
        e2--;
    }
    return grid;
}

