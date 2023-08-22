function f_gold(s, letter) {
    return Math.floor((s.split(letter).length - 1) * 100 / s.length);
}

