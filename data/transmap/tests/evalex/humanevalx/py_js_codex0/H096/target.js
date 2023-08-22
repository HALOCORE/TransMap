function count_up_to(n) {
    let primes = [];
    for (let i = 2; i < n; i++) {
        let is_prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            primes.push(i);
        }
    }
    return primes;
}

