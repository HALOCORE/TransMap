function f_gold(s) {
    var res = 0;
    for (var i = 0; i < 26; i++) {
        var c = String.fromCharCode(97 + i);
        if (s.indexOf(c) != -1) {
            var l = s.indexOf(c);
            var r = s.lastIndexOf(c);
            var chars = new Set();
            for (var j = l + 1; j < r; j++) {
                chars.add(s[j]);
            }
            res += chars.size;
        }
    }
    return res;
}

