function f_gold(s) {
    var ss = new Set(s);
    for (var c of ascii_uppercase.split("").reverse()) {
        if (ss.has(c) && ss.has(c.toLowerCase())) {
            return c;
        }
    }
    return '';
}

