function f_gold(allowed, words) {
    var res = 0;
    var chars = new Set(allowed);
    for (var word of words) {
        var find = true;
        for (var c of word) {
            if (!chars.has(c)) {
                find = false;
                break;
            }
        }
        if (find) {
            res += 1;
        }
    }
    return res;
}

