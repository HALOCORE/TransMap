function f_gold(words, maxWidth) {
    function partition(n, cnt) {
        let res = [];
        let base = Math.floor(n / cnt);
        let mod = n % cnt;
        let i = 0;
        let j = 0;
        while (i < cnt) {
            let t = [' '.repeat(base)];
            if (j < mod) {
                t.push(' ');
            }
            res.push(t.join(''));
            i = i + 1;
            j = j + 1;
        }
        return res;
    }
    let ans = [];
    let i = 0;
    let n = words.length;
    while (i < n) {
        let t = [];
        let cnt = words[i].length;
        t.push(words[i]);
        i = i + 1;
        while (i < n && cnt + 1 + words[i].length <= maxWidth) {
            cnt = cnt + 1 + words[i].length;
            t.push(words[i]);
            i = i + 1;
        }
        if (i == n || t.length == 1) {
            let left = t.join(' ');
            let right = ' '.repeat(maxWidth - left.length);
            ans.push(left + right);
            if (i == n) {
                break;
            }
            continue;
        }
        let words_width = cnt - t.length + 1;
        let space_width = maxWidth - words_width;
        let spaces = partition(space_width, t.length - 1);
        let sb = [t[0]];
        for (let j = 0; j < t.length - 1; j++) {
            sb.push(spaces[j]);
            sb.push(t[j + 1]);
        }
        ans.push(sb.join(''));
    }
    return ans;
}

