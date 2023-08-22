function f_gold(s) {
    var curr = 0;
    for (var t of s.split(' ')) {
        if (t[0].match(/\d/)) {
            if (curr >= parseInt(t)) {
                return false;
            }
            curr = parseInt(t);
        }
    }
    return true;
}

