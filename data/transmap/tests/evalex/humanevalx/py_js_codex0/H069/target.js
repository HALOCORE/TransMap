function search(lst) {
    let frq = new Array(Math.max(...lst) + 1).fill(0);
    for (let i of lst) {
        frq[i] += 1;
    }

    let ans = -1;
    for (let i = 1; i < frq.length; i++) {
        if (frq[i] >= i) {
            ans = i;
        }
    }

    return ans;
}

