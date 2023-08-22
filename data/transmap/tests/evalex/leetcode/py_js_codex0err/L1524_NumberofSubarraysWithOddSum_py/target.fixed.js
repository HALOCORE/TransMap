const f_gold = (arr) => {
    const MOD = Math.pow(10, 9) + 7;
    let counter = [0, 0];
    let s = 0, ans = 0;
    for (let v of arr) {
        s += v;
        counter[s % 2] += 1;
        if (s % 2 == 1) {
            ans += 1 + counter[0];
        } else {
            ans += counter[1];
        }
    }
    return ans % MOD;
}

