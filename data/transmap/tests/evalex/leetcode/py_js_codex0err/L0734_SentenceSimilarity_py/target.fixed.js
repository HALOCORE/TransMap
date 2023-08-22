function f_gold(sentence1, sentence2, similarPairs) {
    if (sentence1.length != sentence2.length) {
        return false;
    }
    var pairs = new Set();
    for (var i = 0; i < similarPairs.length; i++) {
        pairs.add([similarPairs[i][0], similarPairs[i][1]].join(","));
    }
    for (var i = 0; i < sentence1.length; i++) {
        var similar = (pairs.has([sentence1[i], sentence2[i]].join(",")) || pairs.has([sentence2[i], sentence1[i]].join(",")) || sentence1[i] == sentence2[i]);
        if (!similar) {
            return false;
        }
    }
    return true;
}

