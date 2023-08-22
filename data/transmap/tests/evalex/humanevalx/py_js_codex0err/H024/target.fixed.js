function largest_divisor(n) {
    for (var i = n-1; i >= 0; i--) {
        if (n % i === 0) {
            return i;
        }
    }
}

