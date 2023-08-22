function f_gold(text) {
    function get(l, r) {
        return (h[r] - h[l - 1] * p[r - l + 1]) % mod;
    }
    var n = text.length;
    var base = 131;
    var mod = Math.pow(10, 9) + 7;
    var h = new Array(n + 10);
    var p = new Array(n + 10);
    for (var i = 0; i < text.length; i++) {
        var c = text[i];
        var t = c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        h[i + 1] = (h[i] * base) % mod + t;
        p[i + 1] = (p[i] * base) % mod;
    }
    var vis = new Set();
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j += 2) {
            var k = (i + j) >> 1;
            var a = get(i + 1, k + 1);
            var b = get(k + 2, j + 1);
            if (a == b) {
                vis.add(a);
            }
        }
    }
    return vis.size;
}

