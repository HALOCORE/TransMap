function f_gold(words, s) {
    return words.filter(word => word == s.substring(0, word.length)).length;
}

