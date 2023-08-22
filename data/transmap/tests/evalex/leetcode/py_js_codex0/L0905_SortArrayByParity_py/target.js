function f_gold(nums) {
    var i = 0;
    var j = nums.length - 1;
    while (i < j) {
        if (nums[i] & 1) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j -= 1;
        }
        else {
            i += 1;
        }
    }
    return nums;
}

