function f_gold(s) {
    let mp = new Map();
    let i = 0;
    let j = 0;
    let ans = 0;
    for (let c of s) {
        mp.set(c, (mp.get(c) || 0) + 1);
        while (mp.size > 2) {
            mp.set(s[i], mp.get(s[i]) - 1);
            if (mp.get(s[i]) == 0) {
                mp.delete(s[i]);
            }
            i++;
        }
        ans = Math.max(ans, j - i + 1);
        j++;
    }
    return ans;
}

