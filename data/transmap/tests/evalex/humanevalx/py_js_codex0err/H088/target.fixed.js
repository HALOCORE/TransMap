function sort_array(array) {
    return array.length === 0 ? [] : array.sort((a, b) => (array[0] + array[array.length-1]) % 2 === 0 ? b - a : a - b);
}

