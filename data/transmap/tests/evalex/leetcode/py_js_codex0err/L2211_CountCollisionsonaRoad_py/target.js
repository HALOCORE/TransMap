function f_gold(directions) {
    var d = directions.lstrip('L').rstrip('R');
    return len(d) - d.count('S');
}

