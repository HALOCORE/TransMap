function f_gold(text, brokenLetters) {
    var letters = new Set(brokenLetters);
    var res = 0;
    for (var word of text.split(/\s+/)) {
        var find = false;
        for (var letter of letters) {
            if (word.includes(letter)) {
                find = true;
                break;
            }
        }
        if (!find) {
            res += 1;
        }
    }
    return res;
}

