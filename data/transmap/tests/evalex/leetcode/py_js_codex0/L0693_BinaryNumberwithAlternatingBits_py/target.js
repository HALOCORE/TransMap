function f_gold(n) {
    n ^= n >> 1;
    return (n & (n + 1)) == 0;
}

