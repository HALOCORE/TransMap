function largest_divisor(n) {
    for (var i = n; i >= 0; i--) {
        if (n % i === 0) {
            return i;
        }
    }
}

