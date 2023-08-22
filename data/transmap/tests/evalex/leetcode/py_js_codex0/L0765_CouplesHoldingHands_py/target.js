function f_gold (row) {
    var n = row.length >> 1;
    var p = Array.from(Array(n).keys());
    function find (x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for (var i = 0; i < row.length; i += 2) {
        var a = row[i] >> 1;
        var b = row[i + 1] >> 1;
        p[find(a)] = find(b);
    }
    var cnt = 0;
    for (var i = 0; i < n; i++) {
        if (i == find(i)) {
            cnt += 1;
        }
    }
    return n - cnt;
}

