function f_gold(nums) {
    let n = nums.length;
    let vis = Array(n).fill(false);
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (vis[i]) continue;
        let cur = nums[i];
        let m = 1;
        vis[cur] = true;
        while (nums[cur] != nums[i]) {
            cur = nums[cur];
            m += 1;
            vis[cur] = true;
        }
        res = Math.max(res, m);
    }
    return res;
}

