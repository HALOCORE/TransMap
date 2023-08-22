function f_gold(nums, k) {
    var n = nums.length;
    return sum(
        nums[i] == nums[j] && (i * j) % k == 0
        for (var i = 0; i < n; i++)
        for (var j = i + 1; j < n; j++)
    );
}

