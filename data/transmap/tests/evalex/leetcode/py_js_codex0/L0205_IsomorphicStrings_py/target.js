function f_gold(s, t) {
    var d1 = Array(256).fill(0);
    var d2 = Array(256).fill(0);
    for (var i = 0; i < s.length; i++) {
        var a = s.charCodeAt(i);
        var b = t.charCodeAt(i);
        if (d1[a] != d2[b]) {
            return false;
        }
        d1[a] = d2[b] = i + 1;
    }
    return true;
}

