function f_gold(nums, k) {
    let counter = { 0: 1 };
    let ans = s = 0;
    for (let num of nums) {
        s += num;
        ans += counter[s - k];
        counter[s] += 1;
    }
    return ans;
}

