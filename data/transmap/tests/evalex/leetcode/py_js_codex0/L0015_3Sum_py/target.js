
function f_gold(nums) {
    var n = nums.length;
    var res = [];
    if (n < 3) {
        return res;
    }
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < n - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        var j = i + 1;
        var k = n - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j += 1;
                k -= 1;
                while (j < n && nums[j] == nums[j - 1]) {
                    j += 1;
                }
                while (k > i && nums[k] == nums[k + 1]) {
                    k -= 1;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j += 1;
            } else {
                k -= 1;
            }
        }
    }
    return res;
}

