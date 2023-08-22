function f_gold(nums, maxOperations) {
    var left = 1;
    var right = Math.max.apply(null, nums);
    while (left < right) {
        var mid = (left + right) >> 1;
        var ops = 0;
        for (var i = 0; i < nums.length; i++) {
            ops += Math.floor((nums[i] - 1) / mid);
        }
        if (ops <= maxOperations) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

