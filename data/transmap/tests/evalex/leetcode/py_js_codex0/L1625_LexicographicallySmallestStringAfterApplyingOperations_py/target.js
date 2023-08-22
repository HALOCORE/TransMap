
function f_gold(s, a, b) {
    let q = [s];
    let vis = {};
    vis[s] = true;
    let ans = s;
    while (q.length > 0) {
        s = q.shift();
        if (s < ans) {
            ans = s;
        }
        let nxt1 = "";
        for (let i = 0; i < s.length; i++) {
            if (i & 1) {
                nxt1 += (parseInt(s[i]) + a) % 10;
            } else {
                nxt1 += s[i];
            }
        }
        let nxt2 = s.substring(s.length - b, s.length) + s.substring(0, s.length - b);
        for (let nxt of [nxt1, nxt2]) {
            if (!vis[nxt]) {
                vis[nxt] = true;
                q.push(nxt);
            }
        }
    }
    return ans;
}

