function f_gold(m, n, indices) {
    var g = Array(m).fill(0).map(() => Array(n).fill(0));
    for (var i = 0; i < indices.length; i++) {
        var r = indices[i][0];
        var c = indices[i][1];
        for (var j = 0; j < m; j++) {
            g[j][c] += 1;
        }
        for (var k = 0; k < n; k++) {
            g[r][k] += 1;
        }
    }
    var sum = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            sum += g[i][j] % 2;
        }
    }
    return sum;
}

