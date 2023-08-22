function f_gold(nums, firstLen, secondLen) {
    let n = nums.length;
    let s = Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        s[i] = s[i - 1] + nums[i - 1];
    }
    let ans1 = 0, ans2 = 0, fm = 0, sm = 0;
    for (let i = 0; i < n - firstLen - secondLen + 1; i++) {
        fm = Math.max(fm, s[i + firstLen] - s[i]);
        ans1 = Math.max(fm + s[i + firstLen + secondLen] - s[i + firstLen], ans1);
    }
    for (let i = 0; i < n - firstLen - secondLen + 1; i++) {
        sm = Math.max(sm, s[i + secondLen] - s[i]);
        ans2 = Math.max(sm + s[i + firstLen + secondLen] - s[i + secondLen], ans2);
    }
    return Math.max(ans1, ans2);
}

