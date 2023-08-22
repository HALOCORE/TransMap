
function f_gold(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var n = nums.length;
    for (var i = 1; i < n; i++) {
        var d = nums[i] - nums[0];
        if (d == 0 || d % 2 == 1) continue;
        var vis = new Array(n).fill(false);
        vis[i] = true;
        var ans = [(nums[0] + nums[i]) >> 1];
        var l = 1;
        var r = i + 1;
        while (r < n) {
            while (l < n && vis[l]) l++;
            while (r < n && nums[r] - nums[l] < d) r++;
            if (r == n || nums[r] - nums[l] > d) break;
            vis[r] = true;
            ans.push((nums[l] + nums[r]) >> 1);
            l = l + 1;
            r = r + 1;
        }
        if (ans.length == (n >> 1)) return ans;
    }
    return [];
}

