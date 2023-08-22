function select_words(s, n) {
    let result = [];
    for (let word of s.split(' ')) {
        let n_consonants = 0;
        for (let i = 0; i < word.length; i++) {
            if (!["a","e","i","o","u"].includes(word[i].toLowerCase())) {
                n_consonants += 1;
            }
        }
        if (n_consonants == n) {
            result.push(word);
        }
    }
    return result;
}

