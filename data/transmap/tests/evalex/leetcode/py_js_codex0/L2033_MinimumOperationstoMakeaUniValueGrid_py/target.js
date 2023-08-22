function f_gold(grid, x) {
    var nums = [];
    var m = grid.length;
    var n = grid[0].length;
    var base = grid[0][0];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (Math.abs(grid[i][j] - base) % x != 0) {
                return -1;
            }
            nums.push(grid[i][j]);
        }
    }
    nums.sort();
    var mid = nums[nums.length >> 1];
    var ans = 0;
    for (var i = 0; i < nums.length; i++) {
        ans += Math.abs(nums[i] - mid) / x;
    }
    return ans;
}

