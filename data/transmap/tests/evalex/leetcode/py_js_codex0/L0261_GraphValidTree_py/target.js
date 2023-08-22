function f_gold(n, edges) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var p = Array.from(Array(n).keys());
    for (var i = 0; i < edges.length; i++) {
        var a = edges[i][0];
        var b = edges[i][1];
        if (find(a) == find(b)) {
            return false;
        }
        p[find(a)] = find(b);
        n -= 1;
    }
    return n == 1;
}

