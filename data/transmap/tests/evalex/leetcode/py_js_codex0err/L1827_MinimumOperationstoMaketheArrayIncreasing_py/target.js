function f_gold(nums) {
    var mx = ans = 0;
    for (var v of nums) {
        ans += Math.max(0, mx + 1 - v);
        mx = Math.max(mx + 1, v);
    }
    return ans;
}

