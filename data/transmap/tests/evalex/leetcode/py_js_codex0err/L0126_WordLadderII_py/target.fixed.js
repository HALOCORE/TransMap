
function f_gold (beginWord, endWord, wordList) {
    function dfs (path, cur) {
        if (cur == beginWord) {
            ans.push(path.slice().reverse());
            return;
        }
        for (let precursor of prev[cur]) {
            path.push(precursor);
            dfs(path, precursor);
            path.pop();
        }
    }
    let ans = [];
    let words = new Set(wordList);
    if (!words.has(endWord)) {
        return ans;
    }
    words.delete(beginWord);
    let dist = {};
    dist[beginWord] = 0;
    let prev = {};
    let q = [beginWord];
    let found = false;
    let step = 0;
    while (q.length > 0 && !found) {
        step += 1;
        for (let i = q.length - 1; i >= 0; i--) {
            let p = q.shift();
            let s = p.split('');
            for (let i = 0; i < s.length; i++) {
                let ch = s[i];
                for (let j = 0; j < 26; j++) {
                    s[i] = String.fromCharCode(97 + j);
                    let t = s.join('');
                    if (dist[t] == step) {
                        prev[t].add(p);
                    }
                    if (!words.has(t)) {
                        continue;
                    }
                    prev[t] = new Set();
                    prev[t].add(p);
                    words.delete(t);
                    q.push(t);
                    dist[t] = step;
                    if (endWord == t) {
                        found = true;
                    }
                }
                s[i] = ch;
            }
        }
    }
    if (found) {
        let path = [endWord];
        dfs(path, endWord);
    }
    return ans;
}

