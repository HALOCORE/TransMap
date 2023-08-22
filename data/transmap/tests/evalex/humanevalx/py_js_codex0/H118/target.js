function get_closest_vowel(word) {
    if (word.length < 3) {
        return "";
    }
    var vowels = new Set(["a", "e", "i", "o", "u", "A", "E", 'O', 'U', 'I']);
    for (var i = word.length - 2; i > 0; i--) {
        if (vowels.has(word[i])) {
            if (!vowels.has(word[i + 1]) && !vowels.has(word[i - 1])) {
                return word[i];
            }
        }
    }
    return "";
}

