const f_gold = (s) => {
    let pos = new Array(32).fill(Infinity);
    pos[0] = -1;
    let vowels = 'aeiou';
    let state = 0, ans = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] == vowels[j]) {
                state ^= 1 << j;
            }
        }
        ans = Math.max(ans, i - pos[state]);
        pos[state] = Math.min(pos[state], i);
    }
    return ans;
}

