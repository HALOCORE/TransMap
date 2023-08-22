function f_gold(nums) {
    let cnt = Array(101).fill(0);
    for (let num of nums) {
        cnt[num] += 1;
    }
    for (let i = 1; i < 101; i++) {
        cnt[i] += cnt[i - 1];
    }
    let res = [];
    for (let num of nums) {
        res.push(0 if num == 0 else cnt[num - 1]);
    }
    return res;
}

