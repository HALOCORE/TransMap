function f_gold(s, pairs) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var n = s.length;
    var p = Array.from(Array(n).keys());
    for (var i = 0; i < pairs.length; i++) {
        p[find(pairs[i][0])] = find(pairs[i][1]);
    }
    var mp = new Map();
    for (var i = 0; i < s.length; i++) {
        if (mp.has(find(i))) {
            mp.get(find(i)).push(s[i]);
        }
        else {
            mp.set(find(i), [s[i]]);
        }
    }
    var res = "";
    for (var i = 0; i < n; i++) {
        res += mp.get(find(i)).sort().shift();
    }
    return res;
}

