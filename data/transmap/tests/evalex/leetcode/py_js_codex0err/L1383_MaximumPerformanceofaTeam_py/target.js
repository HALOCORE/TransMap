
const f_gold = (n, speed, efficiency, k) => {
    let team = [];
    for (let i = 0; i < n; i++) {
        team.push([speed[i], efficiency[i]]);
    }
    team.sort((a, b) => b[1] - a[1]);
    let q = [];
    let t = 0;
    let ans = 0;
    let mod = Math.pow(10, 9) + 7;
    for (let i = 0; i < n; i++) {
        t += team[i][0];
        ans = Math.max(ans, t * team[i][1]);
        q.push(team[i][0]);
        if (q.length >= k) {
            t -= q.shift();
        }
    }
    return ans % mod;
}

