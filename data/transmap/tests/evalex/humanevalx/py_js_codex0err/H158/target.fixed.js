function find_max(words) {
    return words.sort(function (a, b) {
        return (new Set(b).size - new Set(a).size) || a.localeCompare(b);
    })[0];
}

