
function f_gold(dominoes) {
    let n = dominoes.length;
    let q = [];
    let time = new Array(n).fill(-1);
    let force = new Map();
    for (let i = 0; i < n; i++) {
        let f = dominoes[i];
        if (f != '.') {
            q.push(i);
            time[i] = 0;
            force.set(i, [f]);
        }
    }
    let ans = new Array(n).fill('.');
    while (q.length > 0) {
        let i = q.shift();
        if (force.get(i).length == 1) {
            ans[i] = f = force.get(i)[0];
            let j = i - 1;
            if (f == 'L') {
                j = i + 1;
            }
            if (0 <= j && j < n) {
                let t = time[i];
                if (time[j] == -1) {
                    q.push(j);
                    time[j] = t + 1;
                    force.set(j, [f]);
                }
                else if (time[j] == t + 1) {
                    force.get(j).push(f);
                }
            }
        }
    }
    return ans.join('');
}

