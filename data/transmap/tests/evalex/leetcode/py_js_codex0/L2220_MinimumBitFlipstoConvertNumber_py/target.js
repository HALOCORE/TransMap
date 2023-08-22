function f_gold(start, goal) {
    var t = start ^ goal;
    var ans = 0;
    while (t) {
        ans += t & 1;
        t >>= 1;
    }
    return ans;
}

