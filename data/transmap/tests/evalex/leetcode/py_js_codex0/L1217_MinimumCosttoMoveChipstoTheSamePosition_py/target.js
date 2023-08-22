function f_gold(position) {
    var a = 0;
    for (var i = 0; i < position.length; i++) {
        if (position[i] % 2 == 1) {
            a++;
        }
    }
    var b = position.length - a;
    return Math.min(a, b);
}

