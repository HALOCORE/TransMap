function f_gold(patterns, word) {
    return patterns.filter(p => word.includes(p)).length;
}

