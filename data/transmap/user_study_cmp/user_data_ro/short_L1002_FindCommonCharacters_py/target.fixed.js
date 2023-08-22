function f_gold(words) {
    var freq = [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000];
    for (var word of words) {
        var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var c of word) {
            t[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        for (var i = 0; i < 26; i++) {
            freq[i] = Math.min(freq[i], t[i]);
        }
    }
    var res = [];
    for (var i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            res = res.concat(new Array(freq[i]).fill(String.fromCharCode(i + "a".charCodeAt(0))));
        }
    }
    return res;
}

