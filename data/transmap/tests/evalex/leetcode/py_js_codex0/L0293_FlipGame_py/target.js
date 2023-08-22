function f_gold(s) {
    if (!s || s.length < 2) {
        return [];
    }
    var n = s.length;
    var res = [];
    for (var i = 0; i < n - 1; i++) {
        if (s[i] == '+' && s[i + 1] == '+') {
            res.push(s.substring(0, i) + "--" + s.substring(i + 2, n));
        }
    }
    return res;
}

