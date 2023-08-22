function f_gold(s) {
    var words = s.split(' ');
    var arr = Array(words.length).fill(null);
    for (var word of words) {
        var idx = parseInt(word[word.length - 1]) - 1;
        arr[idx] = word.substring(0, word.length - 1);
    }
    return arr.join(' ');
}

