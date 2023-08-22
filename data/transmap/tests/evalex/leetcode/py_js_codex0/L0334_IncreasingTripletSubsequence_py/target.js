function f_gold(nums) {
    var mi = Number.POSITIVE_INFINITY;
    var mid = Number.POSITIVE_INFINITY;
    for (var num of nums) {
        if (num > mid) {
            return true;
        }
        if (num <= mi) {
            mi = num;
        }
        else {
            mid = num;
        }
    }
    return false;
}

