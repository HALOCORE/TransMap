function f_gold(nums) {
    var ans = 0;
    var d = 1000000;
    for (var v of nums) {
        var t = Math.abs(v);
        if (t < d || (t == d && v > ans)) {
            ans = v;
            d = t;
        }
    }
    return ans;
}

