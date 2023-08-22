function f_gold(color) {
    function f(x) {
        var y = parseInt(x, 16) / 17;
        var z = y % 1;
        if (z > 8) {
            y += 1;
        }
        return '{:02x}'.format(17 * y);
    }
    var a = color[1:3];
    var b = color[3:5];
    var c = color[5:7];
    return f('#{f(a)}{f(b)}{f(c)}');
}

