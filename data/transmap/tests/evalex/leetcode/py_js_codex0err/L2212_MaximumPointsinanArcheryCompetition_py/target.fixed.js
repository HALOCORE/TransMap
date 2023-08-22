function f_gold(numArrows, aliceArrows) {
    let n = aliceArrows.length;
    let state = 0;
    let mx = -1;
    for (var mask = 0; mask < (1 << n); mask++) {
        let cnt = 0, points = 0;
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
    var ans = Array(aliceArrows.length).fill(0);
    for (let i = 0; i < aliceArrows.length; i++) {
        if ((state >> i) & 1) {
            ans[i] = aliceArrows[i] + 1;
            numArrows -= ans[i];
        }
    }
    ans[0] = numArrows;
    return ans;
}

