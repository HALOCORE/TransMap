function f_gold(nums, target) {
    var n = nums.length;
    return sum(
        i != j && nums[i] + nums[j] == target for (var i = 0; i < n; i++) for (var j = 0; j < n; j++)
    );
}

