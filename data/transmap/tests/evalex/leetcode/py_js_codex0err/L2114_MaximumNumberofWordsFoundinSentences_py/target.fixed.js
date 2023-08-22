function f_gold(sentences) {
    return 1 + Math.max(...sentences.map(s => s.split(' ').length - 1));
}

