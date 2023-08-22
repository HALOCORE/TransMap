
function f_gold(n, startPos, s) {
    let ans = [];
    let m = s.length;
    let mp = {
        "L": [0, -1],
        "R": [0, 1],
        "U": [-1, 0],
        "D": [1, 0]
    };
    for (let i = 0; i < m; i++) {
        let x = startPos[0];
        let y = startPos[1];
        let t = 0;
        for (let j = i; j < m; j++) {
            let a = mp[s[j]][0];
            let b = mp[s[j]][1];
            if (0 <= x + a && x + a < n && 0 <= y + b && y + b < n) {
                x = x + a;
                y = y + b;
                t = t + 1;
            }
            else {
                break;
            }
        }
        ans.push(t);
    }
    return ans;
}

