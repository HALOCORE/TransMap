
function prime_fib(n) {
    function is_prime(p) {
        if (p < 2) {
            return false;
        }
        for (var k = 2; k < Math.min(Math.sqrt(p) + 1, p - 1); k++) {
            if (p % k == 0) {
                return false;
            }
        }
        return true;
    }
    var f = [0, 1];
    while (true) {
        f.push(f[f.length - 1] + f[f.length - 2]);
        if (is_prime(f[f.length - 1])) {
            n -= 1;
        }
        if (n == 0) {
            return f[f.length - 1];
        }
    }
}

