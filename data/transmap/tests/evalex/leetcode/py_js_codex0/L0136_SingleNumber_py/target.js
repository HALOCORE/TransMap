function f_gold(nums) {
    var res = 0;
    for (var num of nums) {
        res ^= num;
    }
    return res;
}

