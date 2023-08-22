function f_gold(nums) {
    var i = -1;
    var j = nums.length;
    var cur = 0;
    while (cur < j) {
        if (nums[cur] == 0) {
            i += 1;
            var temp = nums[cur];
            nums[cur] = nums[i];
            nums[i] = temp;
            cur += 1;
        }
        else if (nums[cur] == 1) {
            cur += 1;
        }
        else {
            j -= 1;
            var temp = nums[cur];
            nums[cur] = nums[j];
            nums[j] = temp;
        }
    }
}

