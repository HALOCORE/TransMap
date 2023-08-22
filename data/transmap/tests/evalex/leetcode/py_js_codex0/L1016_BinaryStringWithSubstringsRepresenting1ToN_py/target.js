function f_gold(s, n) {
    for (let i = n; i >= n / 2; i--) {
        if (s.indexOf(i.toString(2)) === -1) {
            return false;
        }
    }
    return true;
}

