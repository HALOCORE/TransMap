function f_gold(s, t) {
    var counter = {};
    for (var i = 0; i < s.length; i++) {
        if (counter[s[i]] == undefined) {
            counter[s[i]] = 1;
        } else {
            counter[s[i]] += 1;
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (counter[t[i]] == undefined || counter[t[i]] <= 0) {
            return t[i];
        } else {
            counter[t[i]] -= 1;
        }
    }
    return null;
}

