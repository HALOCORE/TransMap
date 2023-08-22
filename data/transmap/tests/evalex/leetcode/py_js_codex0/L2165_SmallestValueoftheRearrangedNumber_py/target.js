function f_gold(num) {
    if (num == 0) {
        return 0;
    }
    var cnt = Array(10).fill(0);
    var neg = num < 0;
    num = Math.abs(num);
    while (num) {
        var v = num % 10;
        num = Math.floor(num / 10);
        cnt[v] += 1;
    }
    var ans = "";
    if (neg) {
        for (var i = 9; i >= 0; i--) {
            if (cnt[i]) {
                ans += i.toString().repeat(cnt[i]);
            }
        }
        return -parseInt(ans);
    }
    if (cnt[0]) {
        for (var i = 1; i < 10; i++) {
            if (cnt[i]) {
                ans += i.toString();
                cnt[i] -= 1;
                break;
            }
        }
    }
    for (var i = 0; i < 10; i++) {
        if (cnt[i]) {
            ans += i.toString().repeat(cnt[i]);
        }
    }
    return parseInt(ans);
}

