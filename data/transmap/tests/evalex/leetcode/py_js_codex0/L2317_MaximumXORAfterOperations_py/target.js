function f_gold(nums) {
    var ans = 0;
    for (var v of nums) {
        ans |= v;
    }
    return ans;
}

