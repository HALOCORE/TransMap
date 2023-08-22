function f_gold(n) {
    return sum(n % i == 0 for (i in range(2, n))) == 1;
}

