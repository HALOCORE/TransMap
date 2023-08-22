function f_gold(s, c) {
    var n = s.length;
    var ans = new Array(n);
    var j = Number.POSITIVE_INFINITY;
    for (var i = 0; i < n; i++) {
        if (s[i] == c) {
            j = i;
        }
        ans[i] = Math.abs(i - j);
    }
    j = Number.POSITIVE_INFINITY;
    for (var i = n - 1; i >= 0; i--) {
        if (s[i] == c) {
            j = i;
        }
        ans[i] = Math.min(ans[i], Math.abs(i - j));
    }
    return ans;
}

