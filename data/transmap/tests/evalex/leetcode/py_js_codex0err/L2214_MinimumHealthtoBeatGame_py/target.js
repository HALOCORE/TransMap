function f_gold(damage, armor) {
    return sum(damage) - min(max(damage), armor) + 1;
}

