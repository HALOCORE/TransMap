function f_gold(words, pattern) {
    function match(s, t) {
        var m1 = [], m2 = [];
        for (var i = 0; i < 128; i++) {
            m1.push(0);
            m2.push(0);
        }
        for (var i = 0; i < s.length; i++) {
            if (m1[s.charCodeAt(i)] != m2[t.charCodeAt(i)]) {
                return false;
            }
            m1[s.charCodeAt(i)] = m2[t.charCodeAt(i)] = i + 1;
        }
        return true;
    }
    var result = [];
    for (var i = 0; i < words.length; i++) {
        if (match(words[i], pattern)) {
            result.push(words[i]);
        }
    }
    return result;
}

