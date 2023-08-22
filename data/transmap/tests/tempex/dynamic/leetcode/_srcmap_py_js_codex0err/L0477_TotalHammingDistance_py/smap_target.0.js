function f_gold(nums) {
    var ans = 0;
    for (var i = 0; i < 31; i++) {
        var a = b = 0;
        for (var v of nums) {
            var t = (v >> i) & 1;
            if (t) {
                a += 1;
            }
            else {
                b += 1;
            }
        }
        ans += a * b;
    }
    return ans;
}

