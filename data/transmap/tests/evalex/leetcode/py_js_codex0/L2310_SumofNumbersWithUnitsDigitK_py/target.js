function f_gold(num, k) {
    if (num == 0) {
        return 0;
    }
    for (var i = 1; i <= num; i++) {
        var t = num - k * i;
        if (t >= 0 && t % 10 == 0) {
            return i;
        }
    }
    return -1;
}

