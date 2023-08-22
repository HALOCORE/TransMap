function f_gold(s) {
    var n = s.length - 10;
    var cnt = {};
    var ans = [];
    for (var i = 0; i <= n; i++) {
        var sub = s.substring(i, i + 10);
        if (cnt[sub] == undefined) {
            cnt[sub] = 1;
        }
        else {
            cnt[sub] += 1;
        }
        if (cnt[sub] == 2) {
            ans.push(sub);
        }
    }
    return ans;
}

