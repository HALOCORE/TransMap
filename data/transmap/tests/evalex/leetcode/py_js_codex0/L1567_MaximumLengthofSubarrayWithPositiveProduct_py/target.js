
function f_gold(nums) {
    var f1 = 1;
    if (nums[0] > 0) {
        f1 = 1;
    }
    else {
        f1 = 0;
    }
    var f2 = 1;
    if (nums[0] < 0) {
        f2 = 1;
    }
    else {
        f2 = 0;
    }
    var res = f1;
    for (var i = 1; i < nums.length; i++) {
        var pf1 = f1;
        var pf2 = f2;
        if (nums[i] > 0) {
            f1 += 1;
            if (f2 > 0) {
                f2 += 1;
            }
            else {
                f2 = 0;
            }
        }
        else if (nums[i] < 0) {
            pf1 = f1;
            pf2 = f2;
            f2 = pf1 + 1;
            if (pf2 > 0) {
                f1 = pf2 + 1;
            }
            else {
                f1 = 0;
            }
        }
        else {
            f1 = 0;
            f2 = 0;
        }
        res = Math.max(res, f1);
    }
    return res;
}

