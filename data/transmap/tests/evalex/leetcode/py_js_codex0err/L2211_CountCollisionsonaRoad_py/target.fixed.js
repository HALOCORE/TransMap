function f_gold(directions) {
    var d = directions.replace(/^[L]+/, '').replace(/[R]+$/, '');
    return d.length - (d.split('S').length - 1);
}

