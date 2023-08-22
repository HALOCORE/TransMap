function f_gold(n) {
    var ans = 0;
    while (n != 1) {
        if ((n & 1) == 0) {
            n >>= 1;
        }
        else if (n != 3 && (n & 3) == 3) {
            n += 1;
        }
        else {
            n -= 1;
        }
        ans += 1;
    }
    return ans;
}

