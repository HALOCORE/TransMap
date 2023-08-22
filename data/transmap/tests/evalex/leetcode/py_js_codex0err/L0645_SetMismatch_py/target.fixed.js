
const f_gold = (nums) => {
    let eor = 0;
    let n = nums.length;
    for (let i = 1; i < n + 1; i++) {
        eor ^= i ^ nums[i - 1];
    }
    let diff = eor & (~eor + 1);
    let a = 0;
    for (let i = 1; i < n + 1; i++) {
        if ((nums[i - 1] & diff) == 0) {
            a ^= nums[i - 1];
        }
        if ((i & diff) == 0) {
            a ^= i;
        }
    }
    let b = eor ^ a;
    for (let num of nums) {
        if (a == num) {
            return [a, b];
        }
    }
    return [b, a];
}

