function f_gold(words, chars) {
    let counter = new Map();
    for (let i = 0; i < chars.length; i++) {
        if (counter.has(chars[i])) {
            counter.set(chars[i], counter.get(chars[i]) + 1);
        } else {
            counter.set(chars[i], 1);
        }
    }
    let ans = 0;
    for (let i = 0; i < words.length; i++) {
        let cnt = new Map();
        for (let j = 0; j < words[i].length; j++) {
            if (cnt.has(words[i][j])) {
                cnt.set(words[i][j], cnt.get(words[i][j]) + 1);
            } else {
                cnt.set(words[i][j], 1);
            }
        }
        let flag = true;
        for (let [key, value] of cnt) {
            if (counter.has(key) && counter.get(key) >= value) {
                continue;
            } else {
                flag = false;
                break;
            }
        }
        if (flag) {
            ans += words[i].length;
        }
    }
    return ans;
}

