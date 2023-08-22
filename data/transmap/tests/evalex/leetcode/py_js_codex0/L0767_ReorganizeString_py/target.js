function f_gold(s) {
    var n = s.length;
    var cnt = {};
    for (var i = 0; i < n; i++) {
        if (cnt[s[i]] == undefined) {
            cnt[s[i]] = 1;
        }
        else {
            cnt[s[i]] += 1;
        }
    }
    var mx = 0;
    for (var key in cnt) {
        if (cnt[key] > mx) {
            mx = cnt[key];
        }
    }
    if (mx > (n + 1) / 2) {
        return '';
    }
    var i = 0;
    var ans = new Array(n);
    for (var key in cnt) {
        while (cnt[key] > 0) {
            ans[i] = key;
            cnt[key] -= 1;
            i += 2;
            if (i >= n) {
                i = 1;
            }
        }
    }
    return ans.join('');
}

