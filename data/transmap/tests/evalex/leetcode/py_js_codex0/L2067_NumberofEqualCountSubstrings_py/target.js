function f_gold(s, count) {
    let n = s.length;
    if (count > n) return 0;
    let counter = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        counter[i] = new Array(26);
        for (let j = 0; j < 26; j++) {
            counter[i][j] = 0;
        }
    }
    function check(i, j) {
        let c1 = counter[i];
        let c2 = counter[j + 1];
        for (let k = 0; k < 26; k++) {
            if (c2[k] == 0 || c1[k] == c2[k]) continue;
            if (c2[k] - c1[k] != count) return false;
        }
        return true;
    }
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        for (let j = 0; j < 26; j++) {
            counter[i + 1][j] = counter[i][j];
        }
        counter[i + 1][idx] = counter[i][idx] + 1;
        let l = 0;
        for (let _ = 0; _ < 26; _++) {
            l += count;
            let j = i - l + 1;
            if (j < 0) break;
            ans += check(j, i);
        }
    }
    return ans;
}

