function f_gold(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    var flag1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var flag2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < s1.length; i++) {
        flag1[s1.charCodeAt(i) - 97] += 1;
    }
    for (var i = 0; i < s2.length; i++) {
        flag2[s2.charCodeAt(i) - 97] += 1;
        if (i >= s1.length) {
            flag2[s2.charCodeAt(i - s1.length) - 97] -= 1;
        }
        if (flag1.toString() == flag2.toString()) {
            return true;
        }
    }
    return false;
}

