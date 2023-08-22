function f_gold(score) {
    let n = score.length;
    let idx = Array.from(Array(n).keys());
    idx.sort((x, y) => -(score[x] - score[y]));
    let top3 = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
    let ans = Array(n).fill(null);
    for (let i = 0; i < n; i++) {
        ans[idx[i]] = (i < 3) ? top3[i] : (i + 1).toString();
    }
    return ans;
}

