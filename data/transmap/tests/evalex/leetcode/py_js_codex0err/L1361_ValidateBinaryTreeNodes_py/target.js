function f_gold(n, leftChild, rightChild) {
    var p = Array.from(Array(n).keys());
    var vis = Array(n).fill(false);
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for (var i = 0; i < n; i++) {
        var l = leftChild[i];
        var r = rightChild[i];
        if (l != -1) {
            if (vis[l] || find(i) == find(l)) {
                return false;
            }
            p[find(i)] = find(l);
            vis[l] = true;
            n -= 1;
        }
        if (r != -1) {
            if (vis[r] || find(i) == find(r)) {
                return false;
            }
            p[find(i)] = find(r);
            vis[r] = true;
            n -= 1;
        }
    }
    return n == 1;
}

