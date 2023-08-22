function f_gold(s, repeatLimit) {
    let cnt = Array(26).fill(0);
    for (let c of s) {
        cnt[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    let ans = [];
    for (let i = 25; i >= 0; i--) {
        let j = i - 1;
        while (1) {
            for (let _ = 0; _ < Math.min(repeatLimit, cnt[i]); _++) {
                cnt[i] -= 1;
                ans.push(String.fromCharCode(ord('a') + i));
            }
            if (cnt[i] == 0) {
                break;
            }
            while (j >= 0 && cnt[j] == 0) {
                j -= 1;
            }
            if (j < 0) {
                break;
            }
            cnt[j] -= 1;
            ans.push(String.fromCharCode(ord('a') + j));
        }
    }
    return ans.join('');
}

