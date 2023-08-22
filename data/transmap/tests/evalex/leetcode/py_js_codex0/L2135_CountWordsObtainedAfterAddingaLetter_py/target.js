
function f_gold(startWords, targetWords) {
    let s = new Set();
    for (let word of startWords) {
        let mask = 0;
        for (let c of word) {
            mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        s.add(mask);
    }
    let ans = 0;
    for (let word of targetWords) {
        let mask = 0;
        for (let c of word) {
            mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        for (let c of word) {
            let t = mask ^ (1 << (c.charCodeAt(0) - 'a'.charCodeAt(0)));
            if (s.has(t)) {
                ans += 1;
                break;
            }
        }
    }
    return ans;
}

