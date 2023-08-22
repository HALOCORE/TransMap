const f_gold = (dominoes) => {
    let counter = {};
    let ans = 0;
    for (let i = 0; i < dominoes.length; i++) {
        let a = dominoes[i][0];
        let b = dominoes[i][1];
        let v = a * 10 + b;
        if (a > b) {
            v = b * 10 + a;
        }
        ans += counter[v] || 0;
        counter[v] = (counter[v] || 0) + 1;
    }
    return ans;
}

