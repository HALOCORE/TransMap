function f_gold(s) {
    for (var i = 1; i < s.length; i++) {
        if (s.substring(0, s.length - i) == s.substring(i)) {
            return s.substring(i);
        }
    }
    return '';
}

