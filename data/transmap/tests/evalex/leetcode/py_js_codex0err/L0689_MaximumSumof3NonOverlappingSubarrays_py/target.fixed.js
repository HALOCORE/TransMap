
function f_gold(nums, k) {
    var s = 0, s1 = 0, s2 = 0, s3 = 0;
    var mx1 = 0, mx12 = 0;
    var idx1 = 0, idx12 = 0;
    var ans = [];
    for (var i = k * 2; i < nums.length; i++) {
        s1 += nums[i - k * 2];
        s2 += nums[i - k];
        s3 += nums[i];
        if (i >= k * 3 - 1) {
            if (s1 > mx1) {
                mx1 = s1;
                idx1 = i - k * 3 + 1;
            }
            if (mx1 + s2 > mx12) {
                mx12 = mx1 + s2;
                idx12 = [idx1, i - k * 2 + 1];
            }
            if (mx12 + s3 > s) {
                s = mx12 + s3;
                ans = [...idx12, i - k + 1];
            }
            s1 -= nums[i - k * 3 + 1];
            s2 -= nums[i - k * 2 + 1];
            s3 -= nums[i - k + 1];
        }
    }
    return ans;
}

