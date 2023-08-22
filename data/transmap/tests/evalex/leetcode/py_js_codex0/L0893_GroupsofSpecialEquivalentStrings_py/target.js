function f_gold(words) {
    let s = new Set();
    for (let word of words) {
        s.add(word.slice(0, 2).sort().join("") + word.slice(2).sort().join(""));
    }
    return s.size;
}

