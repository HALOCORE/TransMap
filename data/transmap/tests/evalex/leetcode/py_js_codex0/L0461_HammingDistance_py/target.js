function f_gold(x, y) {
    var num = x ^ y;
    var count = 0;
    while (num != 0) {
        num &= num - 1;
        count += 1;
    }
    return count;
}

