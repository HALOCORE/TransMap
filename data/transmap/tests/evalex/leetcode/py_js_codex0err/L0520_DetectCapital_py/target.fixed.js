function f_gold(word) {
    var cnt = 0;
    for (var c of word) {
        if (c.toUpperCase() === c) {
            cnt += 1;
        }
    }
    return cnt == 0 || cnt == word.length || (cnt == 1 && word[0].isupper());
}

