function f_gold(n) {
    var ans = 0;
    while (n) {
        n = Math.floor(n / 5);
        ans += n;
    }
    return ans;
}

