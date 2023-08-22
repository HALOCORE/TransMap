function f_gold(s, goal) {
    var m = s.length;
    var n = goal.length;
    if (m != n) {
        return false;
    }
    var diff = 0;
    for (var i = 0; i < n; i++) {
        if (s[i] != goal[i]) {
            diff++;
        }
    }
    var cnt1 = {};
    var cnt2 = {};
    for (var i = 0; i < m; i++) {
        if (cnt1[s[i]] == undefined) {
            cnt1[s[i]] = 1;
        }
        else {
            cnt1[s[i]]++;
        }
        if (cnt2[goal[i]] == undefined) {
            cnt2[goal[i]] = 1;
        }
        else {
            cnt2[goal[i]]++;
        }
    }
    if (JSON.stringify(cnt1) != JSON.stringify(cnt2)) {
        return false;
    }
    return diff == 2 || (diff == 0 && Object.values(cnt1).some(function (e) { return e > 1; }));
}

