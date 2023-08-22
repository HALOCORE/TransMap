function f_gold(piles) {
    piles.sort();
    return piles.slice(piles.length / 3, piles.length - 1).reduce((a, b) => a + b, 0);
}

