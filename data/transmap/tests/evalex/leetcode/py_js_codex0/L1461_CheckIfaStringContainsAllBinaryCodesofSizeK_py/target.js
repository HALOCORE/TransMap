function f_gold(s, k) {
    var counter = 1 << k;
    var exists = new Set();
    for (var i = k; i < s.length + 1; i++) {
        if (!exists.has(s.substring(i - k, i))) {
            exists.add(s.substring(i - k, i));
            counter -= 1;
        }
        if (counter == 0) {
            return true;
        }
    }
    return false;
}

