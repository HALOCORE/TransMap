function f_gold(words) {
    var freq = [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000];
    for (var word in words) {
        var t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (var c in word) {
            t[ord(c) - ord('a')] += 1;
        }
        for (var i = 0; i < 26; i++) {
            freq[i] = Math.min(freq[i], t[i]);
        }
    }
    var res = [];
    for (var i = 0; i < 26; i++) {
        if (freq[i] > 0) {
            res.extend([chr(i + ord("a"))] * freq[i]);
        }
    }
    return res;
}

