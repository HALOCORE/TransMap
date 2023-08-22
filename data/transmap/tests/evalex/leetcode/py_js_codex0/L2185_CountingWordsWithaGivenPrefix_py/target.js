function f_gold(words, pref) {
    return words.filter(w => w.startsWith(pref)).length;
}

