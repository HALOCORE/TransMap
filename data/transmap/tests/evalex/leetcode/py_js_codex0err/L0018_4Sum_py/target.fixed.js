
function f_gold(nums, target) {
    var n = nums.length;
    var res = [];
    if (n < 4) {
        return [];
    }
    nums.sort((a, b) => a - b);
    for (var i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            var k = j + 1;
            var l = n - 1;
            while (k < l) {
                if (nums[i] + nums[j] + nums[k] + nums[l] == target) {
                    res.push([nums[i], nums[j], nums[k], nums[l]]);
                    k += 1;
                    l -= 1;
                    while (k < n && nums[k] == nums[k - 1]) {
                        k += 1;
                    }
                    while (l > j && nums[l] == nums[l + 1]) {
                        l -= 1;
                    }
                } else if (nums[i] + nums[j] + nums[k] + nums[l] < target) {
                    k += 1;
                } else {
                    l -= 1;
                }
            }
        }
    }
    return res;
}

