function f_gold(s) {
    var cnt = {};
    var ans = 0;
    var i = 0;
    var j = 1;
    for (var i = 0; i < s.length; i++) {
        if (cnt[s[i]] == undefined) {
            cnt[s[i]] = 1;
        }
        else {
            cnt[s[i]] += 1;
        }
    }
    var values = Object.values(cnt);
    values.sort(function (a, b) { return b - a; });
    for (var i = 0; i < values.length; i++) {
        i += 1;
        ans += j * values[i];
        if (i % 9 == 0) {
            j += 1;
        }
    }
    return ans;
}

