function f_gold(n, k) {
    if (n == 1) {
        return 1;
    }
    var ans = (k + f_gold(n - 1, k)) % n;
    return (ans == 0) ? n : ans;
}

