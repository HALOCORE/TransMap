function f_gold(nums) {
    var res = 1;
    for (var num of nums) {
        if (num == 0) {
            return 0;
        }
        if (num < 0) {
            res *= -1;
        }
    }
    return res;
}

