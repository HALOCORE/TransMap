function f_gold(mapping, nums) {
    var m = [];
    for (var i = 0; i < nums.length; i++) {
        var a = nums[i];
        var b = 0;
        var t = 1;
        while (1) {
            var x = a % 10;
            a = Math.floor(a / 10);
            x = mapping[x];
            b = x * t + b;
            t *= 10;
            if (a == 0) {
                break;
            }
        }
        m.push([b, i, nums[i]]);
    }
    m.sort();
    for (var i = 0; i < m.length; i++) {
        nums[i] = m[i][2];
    }
    return nums;
}

