
function f_gold(sentence1, sentence2, similarPairs) {
    if (sentence1.length != sentence2.length) {
        return false;
    }
    var n = similarPairs.length;
    var p = [];
    for (var i = 0; i < (n << 1); i++) {
        p.push(i);
    }
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var words = {};
    var idx = 0;
    for (var i = 0; i < similarPairs.length; i++) {
        var a = similarPairs[i][0];
        var b = similarPairs[i][1];
        if (!words.hasOwnProperty(a)) {
            words[a] = idx;
            idx += 1;
        }
        if (!words.hasOwnProperty(b)) {
            words[b] = idx;
            idx += 1;
        }
        p[find(words[a])] = find(words[b]);
    }
    for (var i = 0; i < sentence1.length; i++) {
        if (sentence1[i] == sentence2[i]) {
            continue;
        }
        if (!words.hasOwnProperty(sentence1[i]) || !words.hasOwnProperty(sentence2[i]) || find(words[sentence1[i]]) != find(words[sentence2[i]])) {
            return false;
        }
    }
    return true;
}

