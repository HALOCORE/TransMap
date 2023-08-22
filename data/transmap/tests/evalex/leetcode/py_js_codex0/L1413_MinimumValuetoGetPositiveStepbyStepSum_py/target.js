const f_gold = (nums) => {
    let s = 0;
    let t = Number.POSITIVE_INFINITY;
    for (let num of nums) {
        s += num;
        t = Math.min(t, s);
    }
    return Math.max(1, 1 - t);
};

