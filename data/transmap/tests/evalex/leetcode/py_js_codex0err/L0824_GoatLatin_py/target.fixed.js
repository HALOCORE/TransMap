function f_gold(sentence) {
    var ans = [];
    for (var i = 0; i < sentence.split(/\s+/).length; i++) {
        var word = sentence.split(/\s+/)[i];
        if (word.toLowerCase()[0] != 'a' && word.toLowerCase()[0] != 'e' && word.toLowerCase()[0] != 'i' && word.toLowerCase()[0] != 'o' && word.toLowerCase()[0] != 'u') {
            word = word.substring(1) + word[0];
        }
        word += 'ma';
        word += 'a'.repeat(i + 1);
        ans.push(word);
    }
    return ans.join(' ');
}

