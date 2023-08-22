function f_gold(nums) {
    var max = 0;
    var mask = 0;
    for (var i = 30; i >= 0; i--) {
        var current = 1 << i;
        mask = mask ^ current;
        var s = new Set();
        for (var num of nums) {
            s.add(num & mask);
        }
        var flag = max | current;
        for (var prefix of s) {
            if (s.has(prefix ^ flag)) {
                max = flag;
                break;
            }
        }
    }
    return max;
}

