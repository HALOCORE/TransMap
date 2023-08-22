const f_gold = (nums, maximumBit) => {
    let n = nums.length;
    let s = new Array(n + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] ^ nums[i];
    }
    let ans = [];
    for (let x of s.slice(0, 0).reverse()) {
        let t = 0;
        for (let i = 0; i < maximumBit; i++) {
            if (((x >> i) & 1) == 0) {
                t |= 1 << i;
            }
        }
        ans.push(t);
    }
    return ans;
}

