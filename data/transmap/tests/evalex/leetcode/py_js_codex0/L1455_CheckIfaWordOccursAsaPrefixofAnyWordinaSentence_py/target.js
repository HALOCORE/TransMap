function f_gold(sentence, searchWord) {
    var words = sentence.split(' ');
    var i = 0;
    var n = words.length;
    while (i < n) {
        var word = words[i];
        if (word.substring(0, searchWord.length) == searchWord) {
            return i + 1;
        }
        i += 1;
    }
    return -1;
}

