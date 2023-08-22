function f_gold(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 == nums[i]) {
            return i;
        }
    }
    return -1;
}

