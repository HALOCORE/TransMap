function f_gold(n) {
    n <<= 1;
    var ans = 0;
    var k = 1;
    while (k * (k + 1) <= n) {
        if (n % k == 0 && (n / k + 1 - k) % 2 == 0) {
            ans += 1;
        }
        k += 1;
    }
    return ans;
}

