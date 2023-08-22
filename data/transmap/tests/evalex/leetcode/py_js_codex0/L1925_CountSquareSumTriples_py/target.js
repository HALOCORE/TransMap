function f_gold(n) {
    var res = 0;
    for (var a = 1; a <= n; a++) {
        for (var b = 1; b <= n; b++) {
            var t = a * a + b * b;
            var c = Math.floor(Math.sqrt(t));
            if (c <= n && c * c == t) {
                res++;
            }
        }
    }
    return res;
}

