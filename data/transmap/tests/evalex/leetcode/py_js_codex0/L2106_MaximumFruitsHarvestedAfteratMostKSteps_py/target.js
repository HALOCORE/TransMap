
function f_gold(fruits, startPos, k) {
    let q = [];
    let i = 0;
    let n = fruits.length;
    let ans = 0;
    while (i < n && fruits[i][0] <= startPos) {
        if (startPos - fruits[i][0] <= k) {
            ans += fruits[i][1];
            q.push(fruits[i]);
        }
        i += 1;
    }
    let t = ans;
    while (i < n && fruits[i][0] - startPos <= k) {
        while (
            q.length > 0
            && q[0][0] < startPos
            && fruits[i][0] - q[0][0] + Math.min(startPos - q[0][0], fruits[i][0] - startPos) > k
        ) {
            t -= q[0][1];
            q.shift();
        }
        t += fruits[i][1];
        ans = Math.max(ans, t);
        i += 1;
    }
    return ans;
}

