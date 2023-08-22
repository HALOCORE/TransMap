function f_gold(numArrows, aliceArrows) {
    let n = aliceArrows.length;
    let state = 0;
    let mx = -1;
    for (let mask = 1 << n; mask >= 0; mask--) {
        let cnt = points = 0;
        for (let i = 0; i < aliceArrows.length; i++) {
            if ((mask >> i) & 1) {
                cnt += aliceArrows[i] + 1;
                points += i;
            }
        }
        if (cnt <= numArrows && mx < points) {
            state = mask;
            mx = points;
        }
    }
    let ans = [0] * n;
    for (let i = 0; i < aliceArrows.length; i++) {
        if ((state >> i) & 1) {
            ans[i] = aliceArrows[i] + 1;
            numArrows -= ans[i];
        }
    }
    ans[0] = numArrows;
    return ans;
}

