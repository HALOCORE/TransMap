function add(lst) {
    return lst.filter((x, i) => i % 2 == 1 && x % 2 == 0).reduce((a, b) => a + b);
}

