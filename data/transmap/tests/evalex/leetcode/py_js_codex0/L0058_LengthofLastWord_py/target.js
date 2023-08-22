function f_gold(s) {
    let last_word_length = 0;
    let meet_word = false;
    for (let i = s.length - 1; i >= 0; i--) {
        let ch = s.charCodeAt(i);
        if (ch >= 65 && ch <= 122) {
            meet_word = true;
            last_word_length += 1;
        }
        else if (meet_word) {
            break;
        }
    }
    return last_word_length;
}

