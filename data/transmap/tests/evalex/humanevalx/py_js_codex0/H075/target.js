function is_multiply_prime(a) {
    function is_prime(n) {
        for (var j = 2; j < n; j++) {
            if (n % j == 0) {
                return false;
            }
        }
        return true;
    }
    for (var i = 2; i < 101; i++) {
        if (!is_prime(i)) continue;
        for (var j = 2; j < 101; j++) {
            if (!is_prime(j)) continue;
            for (var k = 2; k < 101; k++) {
                if (!is_prime(k)) continue;
                if (i * j * k == a) return true;
            }
        }
    }
    return false;
}

