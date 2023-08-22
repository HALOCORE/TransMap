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
    let min = counter['b'];
    for (let i = 0; i < 'balon'.length; i++) {
        if (counter['balon'[i]] < min) {
            min = counter['balon'[i]];
        }
    }
    return min;
}

