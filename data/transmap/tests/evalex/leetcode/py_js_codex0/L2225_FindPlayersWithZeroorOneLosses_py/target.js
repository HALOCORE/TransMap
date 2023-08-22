
function f_gold(matches) {
    let cnt = {};
    for (let i = 0; i < matches.length; i++) {
        if (!(matches[i][0] in cnt)) {
            cnt[matches[i][0]] = 0;
        }
        cnt[matches[i][1]] += 1;
    }
    let ans = [[], []];
    for (let u in cnt) {
        if (cnt[u] < 2) {
            ans[cnt[u]].push(u);
        }
    }
    ans[0].sort();
    ans[1].sort();
    return ans;
}

