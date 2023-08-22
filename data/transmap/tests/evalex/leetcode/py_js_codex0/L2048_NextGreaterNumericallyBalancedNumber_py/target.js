function f_gold(n) {
    function check(num) {
        var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var c of String(num)) {
            counter[parseInt(c)] += 1;
        }
        for (var c of String(num)) {
            if (counter[parseInt(c)] != parseInt(c)) {
                return false;
            }
        }
        return true;
    }
    for (var i = n + 1; i < 10000000; i++) {
        if (check(i)) {
            return i;
        }
    }
    return -1;
}

