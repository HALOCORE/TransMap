function f_gold(num) {
    if (num == 1) {
        return false;
    }
    var s = 1;
    var i = 2;
    while (i * i <= num) {
        if (num % i == 0) {
            s += i;
            if (i != num / i) {
                s += num / i;
            }
        }
        i += 1;
    }
    return s == num;
}

