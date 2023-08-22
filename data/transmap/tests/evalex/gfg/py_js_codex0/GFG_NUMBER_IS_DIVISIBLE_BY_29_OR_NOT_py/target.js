function f_gold(n) {
    while (parseInt(n / 100)) {
        var last_digit = parseInt(n % 10);
        n = parseInt(n / 10);
        n += last_digit * 3;
    }
    return (n % 29 == 0);
}

