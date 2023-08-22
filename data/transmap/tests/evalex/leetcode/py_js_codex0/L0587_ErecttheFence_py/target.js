
const f_gold = (trees) => {
    const cross = (i, j, k) => {
        let a = trees[i];
        let b = trees[j];
        let c = trees[k];
        return (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]);
    };
    let n = trees.length;
    if (n < 4) {
        return trees;
    }
    trees.sort();
    let vis = new Array(n).fill(false);
    let stk = [0];
    for (let i = 1; i < n; i++) {
        while (stk.length > 1 && cross(stk[stk.length - 2], stk[stk.length - 1], i) < 0) {
            vis[stk.pop()] = false;
        }
        vis[i] = true;
        stk.push(i);
    }
    let m = stk.length;
    for (let i = n - 2; i >= 0; i--) {
        if (vis[i]) {
            continue;
        }
        while (stk.length > m && cross(stk[stk.length - 2], stk[stk.length - 1], i) < 0) {
            stk.pop();
        }
        stk.push(i);
    }
    stk.pop();
    return stk.map(i => trees[i]);
};

