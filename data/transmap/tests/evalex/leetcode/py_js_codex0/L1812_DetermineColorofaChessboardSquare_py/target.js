function f_gold(coordinates) {
    var x = coordinates.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    var y = parseInt(coordinates[1]);
    return ((x + y) & 1) == 1;
}

