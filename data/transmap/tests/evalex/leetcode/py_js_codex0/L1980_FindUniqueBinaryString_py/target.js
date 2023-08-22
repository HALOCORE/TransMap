function f_gold(nums) {
    var s = new Set(nums.map(function (num) { return num.split("1").length - 1; }));
    var n = nums.length;
    for (var i = 0; i < n + 1; i++) {
        if (!s.has(i)) {
            return "1".repeat(i) + "0".repeat(n - i);
        }
    }
    return "";
}

