function f_gold(s1, s2) {
    var cnt = 0;
    var n = s1.length;
    var c1 = c2 = null;
    for (var i = 0; i < n; i++) {
        if (s1[i] != s2[i]) {
            cnt += 1;
            if ((cnt == 2 && (s1[i] != c2 || s2[i] != c1)) || cnt > 2) {
                return false;
            }
            c1 = s1[i];
            c2 = s2[i];
        }
    }
    return cnt == 0 || cnt == 2;
}

