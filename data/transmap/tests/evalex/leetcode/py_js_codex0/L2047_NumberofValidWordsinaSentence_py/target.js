function f_gold(sentence) {
    function check(token) {
        var hyphen = false;
        for (var i = 0; i < token.length; i++) {
            var c = token[i];
            if (c.isdigit() || (c in '!.,' && i < token.length - 1)) {
                return false;
            }
            if (c == '-') {
                if (hyphen || i == 0 || i == token.length - 1 || !token[i - 1].islower() || !token[i + 1].islower()) {
                    return false;
                }
                hyphen = true;
            }
        }
        return true;
    }
    return sentence.split().map(check).reduce((a, b) => a + b, 0);
}

