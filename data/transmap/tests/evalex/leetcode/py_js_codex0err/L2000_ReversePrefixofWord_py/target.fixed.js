function f_gold(word, ch) {
    var i = word.indexOf(ch);
    return i == -1 ? word : Array.from(word.substring(0, i + 1)).reverse().join("") + word.substring(i + 1, word.length);
}

