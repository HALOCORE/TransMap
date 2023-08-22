function f_gold(c) {
    var a = 0;
    var b = Math.floor(Math.sqrt(c));
    while (a <= b) {
        var s = a * a + b * b;
        if (s == c) {
            return true;
        }
        if (s < c) {
            a += 1;
        }
        else {
            b -= 1;
        }
    }
    return false;
}

