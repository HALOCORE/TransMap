function f_gold(s) {
    var n = s.length;
    var counter = {};
    for (var i = 0; i < n; i++) {
        if (counter[s[i]]) {
            counter[s[i]] += 1;
        } else {
            counter[s[i]] = 1;
        }
    }
    var odd_cnt = 0;
    for (var key in counter) {
        if (counter[key] % 2 == 1) {
            odd_cnt += 1;
        }
    }
    return n if odd_cnt == 0 else n - odd_cnt + 1;
}

