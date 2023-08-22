function f_gold(nums, queries) {
    let ans = [];
    let s = nums.filter(num => num % 2 == 0).reduce((a, b) => a + b, 0);
    for (let i = 0; i < queries.length; i++) {
        let v = queries[i][0];
        let index = queries[i][1];
        let old = nums[index];
        nums[index] += v;
        if (nums[index] % 2 == 0 && old % 2 == 0) {
            s += v;
        }
        else if (nums[index] % 2 == 0 && old % 2 == 1) {
            s += nums[index];
        }
        else if (old % 2 == 0) {
            s -= old;
        }
        ans.push(s);
    }
    return ans;
}

