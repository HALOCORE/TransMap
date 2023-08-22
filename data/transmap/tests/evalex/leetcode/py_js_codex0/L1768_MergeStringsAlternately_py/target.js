function f_gold(word1, word2) {
    var i, m, n, res;
    i = 0;
    m = word1.length;
    n = word2.length;
    res = [];
    while (i < m || i < n) {
        if (i < m) {
            res.push(word1[i]);
        }
        if (i < n) {
            res.push(word2[i]);
        }
        i++;
    }
    return res.join('');
}

