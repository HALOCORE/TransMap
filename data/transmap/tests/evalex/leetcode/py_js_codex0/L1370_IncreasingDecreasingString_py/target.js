function f_gold(s) {
    let counter = Array(26).fill(0);
    for (let c of s) {
        counter[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    let ans = [];
    while (ans.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (counter[i]) {
                ans.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
                counter[i] -= 1;
            }
        }
        for (let i = 25; i >= 0; i--) {
            if (counter[i]) {
                ans.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
                counter[i] -= 1;
            }
        }
    }
    return ans.join('');
}

