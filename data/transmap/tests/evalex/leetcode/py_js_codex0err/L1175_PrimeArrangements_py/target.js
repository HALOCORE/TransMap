const f_gold = (n) => {
    const count = (n) => {
        let cnt = 0;
        let primes = new Array(n + 1).fill(true);
        for (let i = 2; i <= n; i++) {
            if (primes[i]) {
                cnt++;
                for (let j = i + i; j <= n; j += i) {
                    primes[j] = false;
                }
            }
        }
        return cnt;
    };
    let cnt = count(n);
    let ans = factorial(cnt) * factorial(n - cnt);
    return ans % (10 ** 9 + 7);
};

