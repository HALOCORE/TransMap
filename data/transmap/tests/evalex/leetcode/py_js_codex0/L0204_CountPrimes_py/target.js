function f_gold(n) {
    var primes = new Array(n).fill(true);
    var ans = 0;
    for (var i = 2; i < n; i++) {
        if (primes[i]) {
            ans += 1;
            for (var j = i + i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    return ans;
}

