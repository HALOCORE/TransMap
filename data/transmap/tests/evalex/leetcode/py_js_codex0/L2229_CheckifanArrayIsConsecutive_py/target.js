function f_gold(nums) {
    var mi, mx;
    mi = Math.min.apply(null, nums);
    mx = Math.max.apply(null, nums);
    var n = nums.length;
    return new Set(nums).size == n && mx == mi + n - 1;
}

