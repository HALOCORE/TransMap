function f_gold(nums) {
    var cnt = Array(1001).fill(0);
    for (var num of nums) {
        for (var v of num) {
            cnt[v] += 1;
        }
    }
    var n = nums.length;
    return cnt.map(function (v, i) { return v == n ? i : null; }).filter(function (v) { return v != null; });
}

