function f_gold(n) {
    var ans = 0;
    while (n) {
        n /= 5;
        ans += n;
    }
    return ans;
}

