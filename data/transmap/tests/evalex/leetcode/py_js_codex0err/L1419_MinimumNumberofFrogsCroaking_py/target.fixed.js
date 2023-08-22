function f_gold(croakOfFrogs) {
    let c = 0, r = 0, o = 0, a = 0, k = 0, ans = 0;
    for (let ch of croakOfFrogs) {
        if (ch == 'c') {
            c += 1;
            if (k > 0) {
                k -= 1;
            }
            else {
                ans += 1;
            }
        }
        else if (ch == 'r') {
            r += 1;
            c -= 1;
        }
        else if (ch == 'o') {
            o += 1;
            r -= 1;
        }
        else if (ch == 'a') {
            a += 1;
            o -= 1;
        }
        else {
            k += 1;
            a -= 1;
        }
        if (c < 0 || r < 0 || o < 0 || a < 0) {
            return -1;
        }
    }
    return (c != 0 || r != 0 || o != 0 || a != 0) ? -1 : ans;
}

