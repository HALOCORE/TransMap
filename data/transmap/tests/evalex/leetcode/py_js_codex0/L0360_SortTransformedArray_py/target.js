function f_gold(nums, a, b, c) {
    function f(x) {
        return a * x * x + b * x + c;
    }
    var n = nums.length;
    var i = 0;
    var j = n - 1;
    var k = 0;
    if (a < 0) k = 0;
    else k = n - 1;
    var res = Array(n).fill(0);
    while (i <= j) {
        var v1 = f(nums[i]);
        var v2 = f(nums[j]);
        if (a < 0) {
            if (v1 <= v2) {
                res[k] = v1;
                i += 1;
            }
            else {
                res[k] = v2;
                j -= 1;
            }
            k += 1;
        }
        else {
            if (v1 >= v2) {
                res[k] = v1;
                i += 1;
            }
            else {
                res[k] = v2;
                j -= 1;
            }
            k -= 1;
        }
    }
    return res;
}

