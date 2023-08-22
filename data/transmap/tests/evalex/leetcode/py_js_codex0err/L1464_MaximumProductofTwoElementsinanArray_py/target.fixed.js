function f_gold(nums) {
    var i = 0;
    if (nums[0] > nums[1]) i = 0;
    else i = 1;
    var j = 1 - i;
    for (var k = 2; k < nums.length; k++) {
        if (nums[k] > nums[i]) {
            j = k;
            [i, j] = [j, i];
            //
        }
        else if (nums[k] > nums[j]) {
            j = k;
        }
    }
    return (nums[i] - 1) * (nums[j] - 1);
}

