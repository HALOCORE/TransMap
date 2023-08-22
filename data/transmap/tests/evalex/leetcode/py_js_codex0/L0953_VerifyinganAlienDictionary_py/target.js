function f_gold(words, order) {
    var m = {};
    for (var i = 0; i < order.length; i++) {
        m[order[i]] = i;
    }
    for (var i = 0; i < 20; i++) {
        var prev = -1;
        var valid = true;
        for (var x of words) {
            var curr = -1;
            if (i >= x.length) {
                curr = -1;
            }
            else {
                curr = m[x[i]];
            }
            if (prev > curr) {
                return false;
            }
            if (prev == curr) {
                valid = false;
            }
            prev = curr;
        }
        if (valid) {
            return true;
        }
    }
    return true;
}

