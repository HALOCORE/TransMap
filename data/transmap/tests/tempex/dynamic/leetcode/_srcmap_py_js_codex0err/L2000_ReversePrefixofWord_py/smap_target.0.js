function f_gold(word, ch) {
    var i = word.indexOf(ch);
    return i == -1 ? word : word.substring(i, 0) + word.substring(i + 1, word.length);
}

