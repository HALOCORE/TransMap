function f_gold(s1, s2, baseStr) {
    var p = Array.from(Array(26).keys());
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for (var i = 0; i < s1.length; i++) {
        var a = s1.charCodeAt(i) - 'a'.charCodeAt(0);
        var b = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        var pa = find(a);
        var pb = find(b);
        if (pa < pb) {
            p[pb] = pa;
        }
        else {
            p[pa] = pb;
        }
    }
    var res = [];
    for (var a of baseStr) {
        a = a.charCodeAt(0) - 'a'.charCodeAt(0);
        res.push(String.fromCharCode(find(a) + 'a'.charCodeAt(0)));
    }
    return res.join('');
}

