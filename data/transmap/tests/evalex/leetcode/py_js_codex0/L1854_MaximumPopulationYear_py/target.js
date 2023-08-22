
function f_gold(logs) {
    let delta = Array(2055).fill(0);
    for (let i = 0; i < logs.length; i++) {
        delta[logs[i][0]] += 1;
        delta[logs[i][1]] -= 1;
    }
    let mx = 0;
    let res = 0;
    let cur = 0;
    for (let i = 0; i < delta.length; i++) {
        cur += delta[i];
        if (mx < cur) {
            mx = cur;
            res = i;
        }
    }
    return res;
}

