function f_gold(nums) {
    let eor = 0;
    for (let x of nums) {
        eor ^= x;
    }
    let lowbit = eor & (-eor);
    let ans = [0, 0];
    for (let x of nums) {
        if ((x & lowbit) == 0) {
            ans[0] ^= x;
        }
    }
    ans[1] = eor ^ ans[0];
    return ans;
}

