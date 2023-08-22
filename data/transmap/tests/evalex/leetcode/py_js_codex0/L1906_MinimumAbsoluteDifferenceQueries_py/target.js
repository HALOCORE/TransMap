
function f_gold(nums, queries) {
    var m = nums.length;
    var n = queries.length;
    var pre_sum = new Array(m + 1);
    for (var i = 0; i < m + 1; i++) {
        pre_sum[i] = new Array(101);
    }
    for (var i = 0; i < m + 1; i++) {
        for (var j = 0; j < 101; j++) {
            pre_sum[i][j] = 0;
        }
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < 101; j++) {
            var t = 1;
            if (nums[i - 1] != j) t = 0;
            pre_sum[i][j] = pre_sum[i - 1][j] + t;
        }
    }
    var ans = [];
    for (var i = 0; i < n; i++) {
        var left = queries[i][0];
        var right = queries[i][1] + 1;
        var t = Number.POSITIVE_INFINITY;
        var last = -1;
        for (var j = 1; j < 101; j++) {
            if (pre_sum[right][j] - pre_sum[left][j] > 0) {
                if (last != -1) {
                    t = Math.min(t, j - last);
                }
                last = j;
            }
        }
        if (t == Number.POSITIVE_INFINITY) {
            t = -1;
        }
        ans.push(t);
    }
    return ans;
}

