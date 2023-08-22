function f_gold(n) {
    if (n < 1) {
        return false;
    }
    for (let x of [2, 3, 5]) {
        while (n % x == 0) {
            n /= x;
        }
    }
    return n == 1;
}

