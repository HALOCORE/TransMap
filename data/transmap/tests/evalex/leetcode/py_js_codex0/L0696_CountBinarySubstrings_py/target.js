function f_gold(s) {
    var i = 0;
    var n = s.length;
    var t = [];
    while (i < n) {
        var cnt = 1;
        while (i + 1 < n && s[i + 1] == s[i]) {
            cnt += 1;
            i += 1;
        }
        t.push(cnt);
        i += 1;
    }
    var ans = 0;
    for (var i_1 = 1; i_1 < t.length; i_1++) {
        ans += Math.min(t[i_1 - 1], t[i_1]);
    }
    return ans;
}

