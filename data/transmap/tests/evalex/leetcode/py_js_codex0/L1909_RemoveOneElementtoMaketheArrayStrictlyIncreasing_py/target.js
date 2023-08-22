
function f_gold(nums) {
    function check(nums, i) {
        var prev = -Infinity;
        for (var j = 0; j < nums.length; j++) {
            if (i == j) continue;
            if (prev >= nums[j]) return false;
            prev = nums[j];
        }
        return true;
    }
    var i = 1;
    var n = nums.length;
    while (i < n && nums[i - 1] < nums[i]) {
        i++;
    }
    return check(nums, i - 1) || check(nums, i);
}

