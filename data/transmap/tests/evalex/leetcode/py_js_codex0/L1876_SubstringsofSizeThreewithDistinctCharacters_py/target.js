function f_gold(s) {
    var count = 0;
    var n = s.length;
    for (var i = 0; i < n - 2; i++) {
        count += s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2];
    }
    return count;
}

