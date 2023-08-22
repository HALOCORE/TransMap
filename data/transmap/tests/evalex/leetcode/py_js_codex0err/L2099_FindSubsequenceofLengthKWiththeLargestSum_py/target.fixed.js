function f_gold(nums, k) {
    var idx = Array.from(Array(nums.length).keys());
    idx.sort(function (i, j) { return nums[i] - nums[j]; });
    return idx.slice(-k).sort((a, b) => (a - b)).map(i => nums[i]);
}

