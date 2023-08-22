function f_gold(nums, r, c) {
    var m = nums.length;
    var n = nums[0].length;
    if (m * n != r * c) {
        return nums;
    }
    var res = new Array(r);
    for (var i = 0; i < r; i++) {
        res[i] = new Array(c);
    }
    for (var x = 0; x < m * n; x++) {
        res[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
    }
    return res;
}

