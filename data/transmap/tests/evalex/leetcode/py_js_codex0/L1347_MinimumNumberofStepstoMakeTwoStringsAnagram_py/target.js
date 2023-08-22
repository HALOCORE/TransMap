function f_gold(s, t) {
    var counter = {};
    for (var i = 0; i < s.length; i++) {
        if (counter[s[i]]) {
            counter[s[i]] += 1;
        } else {
            counter[s[i]] = 1;
        }
    }
    var res = 0;
    for (var i = 0; i < t.length; i++) {
        if (counter[t[i]] > 0) {
            counter[t[i]] -= 1;
        } else {
            res += 1;
        }
    }
    return res;
}

