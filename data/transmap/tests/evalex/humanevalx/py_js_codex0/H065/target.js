function circular_shift(x, shift) {
    var s = x.toString();
    if (shift > s.length) {
        return s.split("").reverse().join("");
    } else {
        return s.substring(s.length - shift) + s.substring(0, s.length - shift);
    }
}

