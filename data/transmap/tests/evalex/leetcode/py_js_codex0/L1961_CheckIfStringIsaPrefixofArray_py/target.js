function f_gold(s, words) {
    var t = 0;
    for (var i = 0; i < words.length; i++) {
        t += words[i].length;
        if (s.length == t) {
            return words.slice(0, i + 1).join("") == s;
        }
    }
    return false;
}

