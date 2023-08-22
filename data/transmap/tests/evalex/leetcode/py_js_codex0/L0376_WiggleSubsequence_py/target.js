
function f_gold(nums) {
    var up = 1;
    var down = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = Math.max(up, down + 1);
        } else if (nums[i] < nums[i - 1]) {
            down = Math.max(down, up + 1);
        }
    }
    return Math.max(up, down);
}

