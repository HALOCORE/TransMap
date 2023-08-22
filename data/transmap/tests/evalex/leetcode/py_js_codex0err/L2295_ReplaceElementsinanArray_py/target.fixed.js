function f_gold(nums, operations) {
    var d = {};
    for (var i = 0; i < nums.length; i++) {
        d[nums[i]] = i;
    }
    for (var i = 0; i < operations.length; i++) {
        var a = operations[i][0];
        var b = operations[i][1];
        var idx = d[a];
        delete d[a];
        d[b] = idx;
    }
    var ans = [];
    for (var i = 0; i < nums.length; i++) {
        ans.push(0);
    }
    for (var v in d) {
        ans[d[v]] = parseInt(v);
    }
    return ans;
}

