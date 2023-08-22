function f_gold(nums, k) {
    var vis = new Set();
    var ans = new Set();
    for (var v of nums) {
        if (vis.has(v - k)) {
            ans.add(v - k);
        }
        if (vis.has(v + k)) {
            ans.add(v);
        }
        vis.add(v);
    }
    return ans.size;
}

