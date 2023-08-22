function f_gold(s) {
    function check(i, j) {
        while (i < j) {
            if (s[i] != s[j]) {
                return false;
            }
            [i, j] = [i + 1, j - 1];
        }
        return true;
    }
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) {
            return check(i, j - 1) || check(i + 1, j);
        }
        [i, j] = [i + 1, j - 1];
    }
    return true;
}

