function f_gold(nums) {
    var mx = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i > mx) {
            return false;
        }
        mx = Math.max(mx, i + nums[i]);
    }
    return true;
}

