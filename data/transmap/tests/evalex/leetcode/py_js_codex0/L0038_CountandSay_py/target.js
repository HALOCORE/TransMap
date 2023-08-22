function f_gold(n) {
    var s = '1';
    for (var _ = 0; _ < n - 1; _++) {
        var i = 0;
        var t = [];
        while (i < s.length) {
            var j = i;
            while (j < s.length && s[j] == s[i]) {
                j += 1;
            }
            t.push(String(j - i));
            t.push(String(s[i]));
            i = j;
        }
        s = t.join('');
    }
    return s;
}

