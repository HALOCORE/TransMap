function f_gold(s) {
    var t = '^#' + Array.from(s).join('#') + '#$';
    var n = t.length;
    var p = new Array(n);
    var pos = 0;
    var maxRight = 0;
    var ans = 0;
    for (var i = 1; i < n - 1; i++) {
        p[i] = (maxRight > i) ? Math.min(maxRight - i, p[2 * pos - i]) : 1;
        while (t[i - p[i]] == t[i + p[i]]) {
            p[i] += 1;
        }
        if (i + p[i] > maxRight) {
            maxRight = i + p[i];
            pos = i;
        }
        ans += Math.floor(p[i] / 2);
    }
    return ans;
}

