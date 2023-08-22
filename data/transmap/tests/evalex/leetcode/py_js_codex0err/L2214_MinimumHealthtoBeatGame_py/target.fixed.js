function f_gold(damage, armor) {
    return damage.reduce((a, b) => a + b) - Math.min(Math.max(...damage), armor) + 1;
}

