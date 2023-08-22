function f_gold(x) {
    if (x < 0) {
        return false;
    }
    var y = 0;
    var t = x;
    while (t) {
        y = y * 10 + t % 10;
        t = Math.floor(t / 10);
    }
    return x == y;
}

