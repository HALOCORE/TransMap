function sort_array(array) {
    return array.length === 0 ? [] : array.sort((a, b) => (a + b) % 2 === 0 ? b - a : a - b);
}

