function f_gold(s) {
    var counter = {};
    for (var i = 0; i < s.length; i++) {
        if (counter[s[i]]) {
            counter[s[i]] += 1;
        } else {
            counter[s[i]] = 1;
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (counter[s[i]] == 1) {
            return i;
        }
    }
    return -1;
}

