function f_gold(nums) {
    var s1 = s2 = f1 = f2 = nums[0];
    for (var num of nums.slice(1)) {
        f1 = num + Math.max(f1, 0);
        f2 = num + Math.min(f2, 0);
        s1 = Math.max(s1, f1);
        s2 = Math.min(s2, f2);
    }
    return s1 <= 0 ? s1 : Math.max(s1, nums.reduce((a, b) => a + b) - s2);
}

