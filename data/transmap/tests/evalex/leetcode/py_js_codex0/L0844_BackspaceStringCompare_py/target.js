function f_gold(s, t) {
    var i = s.length - 1;
    var j = t.length - 1;
    var skip1 = 0;
    var skip2 = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == '#') {
                skip1 += 1;
                i -= 1;
            }
            else if (skip1) {
                skip1 -= 1;
                i -= 1;
            }
            else {
                break;
            }
        }
        while (j >= 0) {
            if (t[j] == '#') {
                skip2 += 1;
                j -= 1;
            }
            else if (skip2) {
                skip2 -= 1;
                j -= 1;
            }
            else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (s[i] != t[j]) {
                return false;
            }
        }
        else if (i >= 0 || j >= 0) {
            return false;
        }
        i = i - 1;
        j = j - 1;
    }
    return true;
}

