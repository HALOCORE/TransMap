function f_gold(edges) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var p = Array.from(Array(1010), function (_, x) { return x; });
    for (var i = 0; i < edges.length; i++) {
        var a = edges[i][0];
        var b = edges[i][1];
        if (find(a) == find(b)) {
            return [a, b];
        }
        p[find(a)] = find(b);
    }
    return [];
}

