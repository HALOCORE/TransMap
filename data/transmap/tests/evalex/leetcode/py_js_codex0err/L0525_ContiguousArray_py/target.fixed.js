function f_gold(nums) {
    let s = 0, ans = 0;
    let mp = {0: -1};
    for (let i = 0; i < nums.length; i++) {
        s += nums[i] == 1 ? 1 : -1;
        if (s in mp) {
            ans = Math.max(ans, i - mp[s]);
        }
        else {
            mp[s] = i;
        }
    }
    return ans;
}

