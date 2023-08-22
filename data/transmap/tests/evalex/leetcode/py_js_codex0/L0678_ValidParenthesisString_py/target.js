function f_gold(s) {
    var n = s.length;
    var left = 0;
    var asterisk = 0;
    for (var i = 0; i < n; i++) {
        if (s[i] == "(") {
            left += 1;
        }
        else if (s[i] == ")") {
            if (left > 0) {
                left -= 1;
            }
            else if (asterisk > 0) {
                asterisk -= 1;
            }
            else {
                return false;
            }
        }
        else {
            asterisk += 1;
        }
    }
    var right = 0;
    asterisk = 0;
    for (var i = n - 1; i >= 0; i--) {
        if (s[i] == ")") {
            right += 1;
        }
        else if (s[i] == "(") {
            if (right > 0) {
                right -= 1;
            }
            else if (asterisk > 0) {
                asterisk -= 1;
            }
            else {
                return false;
            }
        }
        else {
            asterisk += 1;
        }
    }
    return true;
}

