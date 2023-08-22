function f_gold(n) {
    if (n == 0 || n == 9) return true;
    if (n < 9) return false;
    return f_gold(Math.floor(n / 8) - (n & 7));
}

