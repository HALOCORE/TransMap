function f_gold(chars) {
    var i, k, n;
    i = 0;
    k = 0;
    n = chars.length;
    while (i < n) {
        var j = i + 1;
        while (j < n && chars[j] == chars[i]) {
            j += 1;
        }
        chars[k] = chars[i];
        k += 1;
        if (j - i > 1) {
            var cnt = String(j - i);
            for (var c of cnt) {
                chars[k] = c;
                k += 1;
            }
        }
        i = j;
    }
    return k;
}

