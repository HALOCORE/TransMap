function f_gold(nums) {
    var left = 0;
    var n = nums.length;
    for (var right = 0; right < n; right++) {
        if (nums[right] != 0) {
            var temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
    }
}

