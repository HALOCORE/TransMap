function f_gold(nums) {
    var res = t = 0;
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

