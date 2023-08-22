function f_gold(nums, k) {
    let counter = { 0: 1 };
    let ans = 0;
    let s = 0;
    for (let num of nums) {
        s += num;
        ans += s - k in counter ? counter[s - k] : 0;
        counter[s] = s in counter ? counter[s] + 1 : 1;
    }
    return ans;
}

