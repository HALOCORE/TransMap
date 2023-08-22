function is_bored(S) {
    let sentences = S.split(/[.?!]\s*/);
    return sentences.reduce((acc, sentence) => {
        if (sentence.slice(0, 2) === 'I ') {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
}

