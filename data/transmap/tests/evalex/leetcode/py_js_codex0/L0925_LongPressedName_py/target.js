function f_gold(name, typed) {
    var m = name.length;
    var n = typed.length;
    var i = 0;
    var j = 0;
    while (i < m && j < n) {
        if (name[i] != typed[j]) {
            return false;
        }
        var cnt1 = 0;
        var cnt2 = 0;
        var c = name[i];
        while (i + 1 < m && name[i + 1] == c) {
            i += 1;
            cnt1 += 1;
        }
        while (j + 1 < n && typed[j + 1] == c) {
            j += 1;
            cnt2 += 1;
        }
        if (cnt1 > cnt2) {
            return false;
        }
        i = i + 1;
        j = j + 1;
    }
    return i == m && j == n;
}

