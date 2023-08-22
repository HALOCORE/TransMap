function f_gold(s, k) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            k -= 1;
        }
        if (k == 0) {
            return s.substring(0, i);
        }
    }
    return s;
}

