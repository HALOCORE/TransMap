function f_gold(n, edges, source, destination) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var p = Array.from(Array(n).keys());
    for (var i = 0; i < edges.length; i++) {
        p[find(edges[i][0])] = find(edges[i][1]);
    }
    return find(source) == find(destination);
}

