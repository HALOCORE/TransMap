function f_gold(nums) {
    var ans = 0;
    for (var i = 0; i < 31; i++) {
        var b = 0;
        var a = b;
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

