function words_in_sentence(sentence) {
    let new_lst = [];
    for (let word of sentence.split()) {
        let flg = 0;
        if (word.length == 1) {
            flg = 1;
        }
        for (let i = 2; i < word.length; i++) {
            if (word.length % i == 0) {
                flg = 1;
            }
        }
        if (flg == 0 || word.length == 2) {
            new_lst.push(word);
        }
    }
    return new_lst.join(" ");
}

