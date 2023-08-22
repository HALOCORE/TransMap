function f_gold(nums, k) {
    let counter = { 0: 1 };
    let ans = 0;
    let s = 0;
    for (let num of nums) {
        s += num;
        ans += counter[s - k];
        counter[s] = s in counter ? counter[s] + 1 : 1;
    }
    return ans;
}

