function f_gold(nums) {
    var a = nums.slice(0, nums.length).sort(function (a, b) { return a - b; });
    var b = nums.slice(1, nums.length).sort(function (a, b) { return b - a; });
    nums.splice(0, nums.length, ...a);
    nums.splice(1, nums.length, ...b);
    return nums;
}

