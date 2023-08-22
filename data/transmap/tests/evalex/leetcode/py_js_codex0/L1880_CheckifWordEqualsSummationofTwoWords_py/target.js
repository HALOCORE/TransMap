function f_gold(firstWord, secondWord, targetWord) {
    function convert(word) {
        var res = 0;
        for (var c of word) {
            res *= 10;
            res += c.charCodeAt(0) - 'a'.charCodeAt(0);
        }
        return res;
    }
    return convert(firstWord) + convert(secondWord) == convert(targetWord);
}

