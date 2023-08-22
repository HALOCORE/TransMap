function f_gold(nums) {
    var s = new Set();
    for (var num of nums) {
        if (s.has(num)) {
            return num;
        }
        s.add(num);
    }
}

