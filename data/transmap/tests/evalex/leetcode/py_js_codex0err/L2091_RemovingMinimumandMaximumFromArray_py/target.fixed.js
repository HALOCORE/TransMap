function f_gold(nums) {
    var mx = 0, mi = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < nums[mi]) {
            mi = i;
        }
        if (nums[i] > nums[mx]) {
            mx = i;
        }
    }
    if (mi > mx) {
        [mi, mx] = [mx, mi];
        //
    }
    return Math.min(mx + 1, nums.length - mi, mi + 1 + nums.length - mx);
}

