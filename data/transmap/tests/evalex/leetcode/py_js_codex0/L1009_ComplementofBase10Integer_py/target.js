function f_gold(n) {
    if (n == 0) {
        return 1;
    }
    var ans = 0;
    var find = false;
    for (var i = 30; i >= 0; i--) {
        var b = n & (1 << i);
        if (!find && b == 0) {
            continue;
        }
        find = true;
        if (b == 0) {
            ans |= 1 << i;
        }
    }
    return ans;
}

