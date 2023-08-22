function f_gold(nums) {
    var i = 0;
    for (var num of nums) {
        if (i < 1 || num != nums[i - 1]) {
            nums[i] = num;
            i += 1;
        }
    }
    return i;
}

