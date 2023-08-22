function f_gold(s) {
    let ans = 0;
    for (let c of s) {
        if (c == '[') {
            ans += 1;
        }
        else if (ans) {
            ans -= 1;
        }
    }
    return (ans + 1) >> 1;
}

