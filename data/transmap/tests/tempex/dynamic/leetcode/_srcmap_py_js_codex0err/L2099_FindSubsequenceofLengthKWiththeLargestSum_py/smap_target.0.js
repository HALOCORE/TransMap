function f_gold(nums, k) {
    var idx = list(range(len(nums)));
    idx.sort(function (i, j) { return nums[i] - nums[j]; });
    return idx.slice(-k).sort((a, b) => (a - b)).map(i => nums[i]);
}

