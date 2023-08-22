function f_gold(s) {
    var ans = 0, t = 0;
    for (var c of s) {
        if (c == '|') {
            t ^= 1;
        }
        else if (c == '*') {
            if (t == 0) {
                ans += 1;
            }
        }
    }
    return ans;
}

