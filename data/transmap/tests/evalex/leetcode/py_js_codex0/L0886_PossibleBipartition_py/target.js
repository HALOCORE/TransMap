function f_gold(n, dislikes) {
    var p = Array.from(Array(n).keys());
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var dis = new Map();
    for (var i = 0; i < dislikes.length; i++) {
        var a = dislikes[i][0] - 1;
        var b = dislikes[i][1] - 1;
        if (dis.has(a)) {
            dis.get(a).push(b);
        }
        else {
            dis.set(a, [b]);
        }
        if (dis.has(b)) {
            dis.get(b).push(a);
        }
        else {
            dis.set(b, [a]);
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < dis.get(i).length; j++) {
            if (find(i) == find(dis.get(i)[j])) {
                return false;
            }
            p[find(dis.get(i)[j])] = find(dis.get(i)[0]);
        }
    }
    return true;
}

