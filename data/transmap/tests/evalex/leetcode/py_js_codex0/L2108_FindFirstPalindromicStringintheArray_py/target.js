function f_gold(words) {
    function check(s) {
        var i = 0;
        var j = s.length - 1;
        while (i < j) {
            if (s[i] != s[j]) {
                return false;
            }
            i += 1;
            j -= 1;
        }
        return true;
    }
    for (var word of words) {
        if (check(word)) {
            return word;
        }
    }
    return '';
}

