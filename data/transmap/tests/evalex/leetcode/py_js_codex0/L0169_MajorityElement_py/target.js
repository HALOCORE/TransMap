function f_gold(nums) {
    var cnt = 0;
    var m = 0;
    for (var v of nums) {
        if (cnt == 0) {
            m = v;
            cnt = 1;
        }
        else {
            cnt += (m == v) ? 1 : -1;
        }
    }
    return m;
}

