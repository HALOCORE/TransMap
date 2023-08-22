function f_gold(candyType) {
    return Math.min(candyType.length >> 1, new Set(candyType).size);
}

