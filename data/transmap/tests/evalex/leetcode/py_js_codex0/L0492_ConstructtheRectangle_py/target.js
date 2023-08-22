function f_gold(area) {
    var w = Math.floor(Math.sqrt(area));
    while (area % w != 0) {
        w -= 1;
    }
    return [area / w, w];
}

