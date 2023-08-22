function cycpattern_check(a, b) {
    var l = b.length;
    var pat = b + b;
    for (var i = 0; i < a.length - l + 1; i++) {
        for (var j = 0; j < l + 1; j++) {
            if (a.substring(i, i + l) == pat.substring(j, j + l)) {
                return true;
            }
        }
    }
    return false;
}

