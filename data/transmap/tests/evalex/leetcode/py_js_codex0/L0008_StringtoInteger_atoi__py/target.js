function f_gold(s) {
    if (!s) return 0;
    var n = s.length;
    if (n == 0) return 0;
    var i = 0;
    while (s[i] == ' ') {
        i++;
        if (i == n) return 0;
    }
    var sign = -1;
    if (s[i] == '-') sign = -1;
    else sign = 1;
    if (s[i] == '-' || s[i] == '+') i++;
    var res = 0;
    var flag = (Math.pow(2, 31) - 1) / 10;
    while (i < n) {
        if (!s[i].isDigit()) break;
        var c = parseInt(s[i]);
        if (res > flag || (res == flag && c > 7)) return Math.pow(2, 31) - 1;
        if (sign < 0) return -(Math.pow(2, 31));
        res = res * 10 + c;
        i++;
    }
    return sign * res;
}

