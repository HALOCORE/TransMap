function is_prime(n) {
    if (n < 2) {
        return false;
    }
    for (var k = 2; k < n - 1; k++) {
        if (n % k == 0) {
            return false;
        }
    }
    return true;
}

