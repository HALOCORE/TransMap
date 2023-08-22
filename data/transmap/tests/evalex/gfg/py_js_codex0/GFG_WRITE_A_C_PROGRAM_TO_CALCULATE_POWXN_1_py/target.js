function f_gold(x, y) {
    if (y == 0)
        return 1;
    var temp = f_gold(x, Math.floor(y / 2));
    if (y % 2 == 0)
        return temp * temp;
    else {
        if (y > 0)
            return x * temp * temp;
        else
            return (temp * temp) / x;
    }
}

