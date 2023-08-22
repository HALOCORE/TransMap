function f_gold(nums) {
    var t = 0;
    var res = t;
    for (var num of nums) {
        if (num == 1) {
            t += 1;
        }
        else {
            res = Math.max(res, t);
            t = 0;
        }
    }
    return Math.max(res, t);
}

