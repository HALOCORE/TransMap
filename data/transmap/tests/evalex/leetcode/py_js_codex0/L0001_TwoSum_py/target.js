function f_gold(nums, target) {
    var helper = {};
    for (var i = 0; i < nums.length; i++) {
        var v = nums[i];
        var num = target - v;
        if (num in helper) {
            return [helper[num], i];
        }
        helper[v] = i;
    }
}

