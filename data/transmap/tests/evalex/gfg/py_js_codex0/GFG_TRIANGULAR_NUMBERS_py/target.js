function f_gold(num) {
    if (num < 0)
        return false;
    var sum = 0;
    var n = 1;
    while (sum <= num) {
        sum = sum + n;
        if (sum == num)
            return true;
        n += 1;
    }
    return false;
}

