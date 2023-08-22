function f_gold(n) {
    return (n == 1 || n == 0) ? 1 : n * f_gold(n - 1);
}

