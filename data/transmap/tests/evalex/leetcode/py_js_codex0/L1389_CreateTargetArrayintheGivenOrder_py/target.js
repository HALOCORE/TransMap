function f_gold(nums, index) {
    var target = [];
    for (var i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    return target;
}

