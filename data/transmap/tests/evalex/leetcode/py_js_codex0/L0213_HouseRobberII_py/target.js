
function f_gold(nums) {
    function f_goldRange(nums, l, r) {
        var a = 0;
        var b = nums[l];
        for (var num of nums.slice(l + 1, r + 1)) {
            var temp = b;
            b = Math.max(num + a, b);
            a = temp;
        }
        return b;
    }
    var n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    var s1 = f_goldRange(nums, 0, n - 2);
    var s2 = f_goldRange(nums, 1, n - 1);
    return Math.max(s1, s2);
}

