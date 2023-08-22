function f_gold(s) {
    let n = 0;
    let res = 0;
    for (let c of s) {
        if (c == 'L') {
            n += 1;
        }
        else {
            n -= 1;
        }
        if (n == 0) {
            res += 1;
        }
    }
    return res;
}

