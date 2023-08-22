function find_max(words) {
    return words.sort(function (a, b) {
        return b.length - a.length || a.localeCompare(b);
    })[0];
}

