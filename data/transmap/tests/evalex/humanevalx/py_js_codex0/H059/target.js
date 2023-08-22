function largest_prime_factor(n) {
    function is_prime(k) {
        if (k < 2) {
            return false;
        }
        for (var i = 2; i < k - 1; i++) {
            if (k % i == 0) {
                return false;
            }
        }
        return true;
    }
    var largest = 1;
    for (var j = 2; j < n + 1; j++) {
        if (n % j == 0 && is_prime(j)) {
            largest = Math.max(largest, j);
        }
    }
    return largest;
}

