function f_gold(dict) {
    var s = new Set();
    for (var word of dict) {
        for (var i = 0; i < word.length; i++) {
            var t = word.substring(0, i) + "*" + word.substring(i + 1);
            if (s.has(t)) {
                return true;
            }
            s.add(t);
        }
    }
    return false;
}

