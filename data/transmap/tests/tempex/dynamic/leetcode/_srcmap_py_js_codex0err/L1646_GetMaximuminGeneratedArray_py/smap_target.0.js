function f_gold(n) {
    if (n == 0) {
        return 0;
    }
    var nums = new Array(n + 1);
    nums[1] = 1;
    for (var i = 2; i <= n; i++) {
        nums[i] = (i % 2 == 0) ? nums[i >> 1] : nums[i >> 1] + nums[(i >> 1) + 1];
    }
    return Math.max(...nums);
}

