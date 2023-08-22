function f_gold(s) {
    var n = s.length;
    var pre = Array(n + 1).fill(0);
    var suf = Array(n + 1).fill(0);
    for (var i = 0; i < n; i++) {
        pre[i + 1] = (s[i] == '0') ? pre[i] : Math.min(pre[i] + 2, i + 1);
    }
    for (var i = n - 1; i >= 0; i--) {
        suf[i] = (s[i] == '0') ? suf[i + 1] : Math.min(suf[i + 1] + 2, n - i);
    }
    var res = Number.MAX_VALUE;
    for (var i = 0; i < n; i++) {
        res = Math.min(res, pre[i + 1] + suf[i + 1]);
    }
    return res;
}

