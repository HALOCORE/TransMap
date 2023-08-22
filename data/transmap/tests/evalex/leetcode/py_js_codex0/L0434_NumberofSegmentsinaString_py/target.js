function f_gold(s) {
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] != ' ' && (i == 0 || s[i - 1] == ' ')) {
            res += 1;
        }
    }
    return res;
}

