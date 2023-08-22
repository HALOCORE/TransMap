function f_gold(nums, k) {
    var mx, mi;
    mx = Math.max.apply(null, nums);
    mi = Math.min.apply(null, nums);
    return Math.max(0, mx - mi - k * 2);
}

