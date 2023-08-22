function f_gold(s, t) {
    var i, j, m, n;
    i = j = m = n = 0;
    while (i < m && j < n) {
        if (s[i] == t[j]) {
            i += 1;
        }
        j += 1;
    }
    return i == m;
}

