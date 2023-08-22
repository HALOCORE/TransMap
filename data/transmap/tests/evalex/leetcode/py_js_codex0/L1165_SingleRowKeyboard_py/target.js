function f_gold(keyboard, word) {
    var index = {};
    for (var i = 0; i < keyboard.length; i++) {
        index[keyboard[i]] = i;
    }
    var res = 0;
    var t = 0;
    for (var i = 0; i < word.length; i++) {
        res += Math.abs(index[word[i]] - t);
        t = index[word[i]];
    }
    return res;
}

