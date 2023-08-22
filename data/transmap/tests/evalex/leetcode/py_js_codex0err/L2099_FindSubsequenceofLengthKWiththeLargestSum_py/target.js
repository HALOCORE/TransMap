function f_gold(nums, k) {
    var idx = list(range(len(nums)));
    idx.sort(function (i) { return nums[i]; });
    return [nums[i] for (i in sorted(idx[-k:]))];
}

