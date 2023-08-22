function f_gold(num) {
    var ans = 0;
    for (var i = 1; i <= num; i++) {
        var t = 0;
        while (i) {
            t += i % 10;
            i = Math.floor(i / 10);
        }
        if (t % 2 == 0) {
            ans += 1;
        }
    }
    return ans;
}

