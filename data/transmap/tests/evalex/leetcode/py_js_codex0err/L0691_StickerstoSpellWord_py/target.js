
function f_gold(stickers, target) {
    let q = [0];
    let ans = 0;
    let n = target.length;
    let vis = new Array(1 << n).fill(false);
    vis[0] = true;
    while (q.length > 0) {
        for (let _ = 0; _ < q.length; _++) {
            let state = q.shift();
            if (state == (1 << n) - 1) {
                return ans;
            }
            for (let s of stickers) {
                let nxt = state;
                let cnt = new Map();
                for (let i = 0; i < s.length; i++) {
                    if (cnt.has(s[i])) {
                        cnt.set(s[i], cnt.get(s[i]) + 1);
                    } else {
                        cnt.set(s[i], 1);
                    }
                }
                for (let i = 0; i < target.length; i++) {
                    if (!(nxt & (1 << i)) && cnt.has(target[i]) && cnt.get(target[i]) > 0) {
                        nxt |= 1 << i;
                        cnt.set(target[i], cnt.get(target[i]) - 1);
                    }
                }
                if (!vis[nxt]) {
                    vis[nxt] = true;
                    q.push(nxt);
                }
            }
        }
        ans += 1;
    }
    return -1;
}

