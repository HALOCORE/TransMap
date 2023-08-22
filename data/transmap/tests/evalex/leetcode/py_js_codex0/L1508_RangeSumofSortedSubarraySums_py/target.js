function f_gold(nums, n, left, right) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var s = 0;
        for (var j = i; j < n; j++) {
            s += nums[j];
            arr.push(s);
        }
    }
    arr.sort();
    var MOD = Math.pow(10, 9) + 7;
    return arr.slice(left - 1, right).reduce(function (a, b) { return a + b; }) % MOD;
}

