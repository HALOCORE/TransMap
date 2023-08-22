function f_gold(nums) {
    var a = nums.filter((_, i) => i % 2 == 0).sort(function (a, b) { return a - b; });
    var b = nums.filter((_, i) => i % 2 == 1).sort(function (a, b) { return b - a; });
    for (let i = 0; i < a.length; i++) nums[i * 2] = a[i];
    for (let i = 0; i < b.length; i++) nums[1 + i * 2] = b[i];
    return nums;
}

