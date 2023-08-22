function f_gold(left, right) {
    while (left < right) {
        right &= right - 1;
    }
    return right;
}

