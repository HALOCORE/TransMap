function f_gold(s) {
    let words = s.split(/\s+/);
    let m = words.length;
    let n = 0;
    for (let i = 0; i < m; i++) {
        n = Math.max(n, words[i].length);
    }
    let ans = [];
    for (let j = 0; j < n; j++) {
        let t = [];
        for (let i = 0; i < m; i++) {
            let word = words[i];
            t.push(word[j] ? word[j] : ' ');
        }
        ans.push(t.join('').trimEnd());
    }
    return ans;
}

