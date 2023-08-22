function f_gold(nums) {
    var n = nums.length;
    var j = 1;
    for (var i = 0; i < n; i += 2) {
        if ((nums[i] & 1) == 1) {
            while ((nums[j] & 1) == 1) {
                j += 2;
            }
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    return nums;
}

