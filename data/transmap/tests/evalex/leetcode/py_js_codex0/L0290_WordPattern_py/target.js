function f_gold(pattern, s) {
    s = s.split(' ');
    var n = pattern.length;
    if (n != s.length) {
        return false;
    }
    var c2str = {};
    var str2c = {};
    for (var i = 0; i < n; i++) {
        var k = pattern[i];
        var v = s[i];
        if (k in c2str && c2str[k] != v) {
            return false;
        }
        if (v in str2c && str2c[v] != k) {
            return false;
        }
        c2str[k] = v;
        str2c[v] = k;
    }
    return true;
}

