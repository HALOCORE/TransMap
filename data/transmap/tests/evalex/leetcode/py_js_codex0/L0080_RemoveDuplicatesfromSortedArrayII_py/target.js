function f_gold(nums) {
    var i = 0;
    for (var num of nums) {
        if (i < 2 || num != nums[i - 2]) {
            nums[i] = num;
            i += 1;
        }
    }
    return i;
}

