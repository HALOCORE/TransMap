function f_gold(text) {
    let counter = {};
    for (let i = 0; i < text.length; i++) {
        if (counter[text[i]]) {
            counter[text[i]]++;
        } else {
            counter[text[i]] = 1;
        }
    }
    counter['l'] >>= 1;
    counter['o'] >>= 1;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 'balon'.length; i++) {
        if (('balon'[i] in counter ? counter['balon'[i]] : 0) < min) {
            min = 'balon'[i] in counter ? counter['balon'[i]] : 0;
        }
    }
    return min;
}

