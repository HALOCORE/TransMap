function f_gold(sentence) {
    function check(token) {
        var hyphen = false;
        for (var i = 0; i < token.length; i++) {
            var c = token[i];
            if (c.match(/^\d+$/) || ('!.,'.includes(c) && i < token.length - 1)) {
                return false;
            }
            if (c == '-') {
                if (hyphen || i == 0 || i == token.length - 1 || token[i - 1].toLowerCase() !== token[i - 1] || token[i + 1].toLowerCase() !== token[i + 1]) {
                    return false;
                }
                hyphen = true;
            }
        }
        return true;
    }
    return sentence.split(/\s+/).map(check).reduce((a, b) => a + b, 0);
}

