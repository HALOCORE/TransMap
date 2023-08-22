function f_gold(nums) {
    var mx = -Infinity;
    for (var num of nums) {
        mx = Math.max(mx, num);
    }
    var total = Array(mx + 1).fill(0);
    for (var num of nums) {
        total[num] += num;
    }
    var first = total[0];
    var second = Math.max(total[0], total[1]);
    for (var i = 2; i <= mx; i++) {
        var cur = Math.max(first + total[i], second);
        first = second;
        second = cur;
    }
    return second;
}

