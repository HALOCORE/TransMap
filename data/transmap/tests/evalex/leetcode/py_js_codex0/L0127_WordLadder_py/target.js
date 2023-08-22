function f_gold (beginWord, endWord, wordList) {
    function extend (m1, m2, q) {
        for (var _ = 0; _ < q.length; _++) {
            var s = q.shift();
            var step = m1[s];
            s = s.split('');
            for (var i = 0; i < s.length; i++) {
                var ch = s[i];
                for (var j = 0; j < 26; j++) {
                    s[i] = String.fromCharCode(97 + j);
                    var t = s.join('');
                    if (t in m1 || !(t in words)) continue;
                    if (t in m2) return step + 1 + m2[t];
                    m1[t] = step + 1;
                    q.push(t);
                }
                s[i] = ch;
            }
        }
        return -1;
    }
    var words = new Set(wordList);
    if (!(endWord in words)) return 0;
    var q1 = [beginWord], q2 = [endWord];
    var m1 = {}, m2 = {};
    m1[beginWord] = 0;
    m2[endWord] = 0;
    while (q1.length > 0 && q2.length > 0) {
        var t = q1.length <= q2.length ? extend(m1, m2, q1) : extend(m2, m1, q2);
        if (t != -1) return t + 1;
    }
    return 0;
}

