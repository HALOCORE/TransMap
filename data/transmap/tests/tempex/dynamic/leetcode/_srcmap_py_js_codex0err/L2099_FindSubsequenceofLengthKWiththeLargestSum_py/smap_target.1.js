function f_gold(nums, k) {
    var idx = Array.from(Array(nums.length).keys());
    idx.sort(function (i) { return nums[i]; });
    return idx.slice(-k).sort((a, b) => (a - b)).map(i => nums[i]);
}

