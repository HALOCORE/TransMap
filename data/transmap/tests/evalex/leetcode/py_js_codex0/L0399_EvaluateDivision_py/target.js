
function f_gold(equations, values, queries) {
    function find(x) {
        if (p[x] != x) {
            var origin = p[x];
            p[x] = find(p[x]);
            w[x] *= w[origin];
        }
        return p[x];
    }
    var w = new Map();
    var p = new Map();
    for (var i = 0; i < equations.length; i++) {
        var a = equations[i][0];
        var b = equations[i][1];
        p.set(a, a);
        p.set(b, b);
    }
    for (var i = 0; i < values.length; i++) {
        var a = equations[i][0];
        var b = equations[i][1];
        var pa = find(a);
        var pb = find(b);
        if (pa == pb) continue;
        p.set(pa, pb);
        w.set(pa, w.get(b) * values[i] / w.get(a));
    }
    var ans = [];
    for (var i = 0; i < queries.length; i++) {
        var c = queries[i][0];
        var d = queries[i][1];
        if (!p.has(c) || !p.has(d) || find(c) != find(d)) ans.push(-1);
        else ans.push(w.get(c) / w.get(d));
    }
    return ans;
}

