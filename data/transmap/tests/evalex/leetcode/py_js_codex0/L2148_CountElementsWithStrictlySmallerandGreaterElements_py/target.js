function f_gold(nums) {
    var mi, mx;
    mi = Math.min.apply(null, nums);
    mx = Math.max.apply(null, nums);
    return nums.reduce(function (acc, num) {
        return acc + (mi < num && num < mx);
    }, 0);
}

